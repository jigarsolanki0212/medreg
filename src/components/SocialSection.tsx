import React from 'react';
import { ExternalLink, Play } from 'lucide-react';
import { SOCIAL } from '@/data/siteContent';

interface Video {
  id: string;
  title: string;
  published: string;
}

const decode = (s: string) =>
  s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');

/** Latest videos from the channel's public RSS feed; refreshed at most every 6 hours. */
async function latestVideos(): Promise<Video[]> {
  if (!SOCIAL.youtubeChannelId) return SOCIAL.youtubeVideoIds.map((id) => ({ id, title: 'MedReg video', published: '' }));
  try {
    const res = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${SOCIAL.youtubeChannelId}`, {
      next: { revalidate: 21600 },
    });
    if (!res.ok) throw new Error(String(res.status));
    const xml = await res.text();
    return [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)]
      .map((m) => ({
        id: m[1].match(/<yt:videoId>([^<]+)/)?.[1] || '',
        title: decode(m[1].match(/<title>([^<]+)/)?.[1] || 'MedReg video'),
        published: m[1].match(/<published>([^<]+)/)?.[1] || '',
      }))
      .filter((v) => /^[\w-]{11}$/.test(v.id))
      .slice(0, 3);
  } catch {
    // Feed unavailable: show the manually listed videos, or just the profile links.
    return SOCIAL.youtubeVideoIds.map((id) => ({ id, title: 'MedReg video', published: '' }));
  }
}

/**
 * Social media updates (brief §6). Profiles with an empty URL in src/data/siteContent.ts are hidden.
 * YouTube shows the latest videos automatically; LinkedIn and Instagram link to the original profiles
 * (their live-feed embeds need platform approval or a paid third-party widget).
 */
export default async function SocialSection({ title = 'Follow MedReg' }: { title?: string }) {
  const profiles = [
    { name: 'LinkedIn', href: SOCIAL.linkedin, text: 'Regulatory updates, company news and job openings.' },
    { name: 'Instagram', href: SOCIAL.instagram, text: 'Team moments, events and behind-the-scenes photos.' },
    { name: 'YouTube', href: SOCIAL.youtube, text: 'Videos on medical device regulations and our training.' },
  ].filter((p) => p.href);
  const videos = SOCIAL.youtube || SOCIAL.youtubeVideoIds.length ? await latestVideos() : [];

  if (profiles.length === 0 && videos.length === 0) return null;

  return (
    <section className="section-pad social-section">
      <div className="container">
        <div className="center-content section-head" style={{ marginBottom: '32px' }}>
          <span className="section-label">Social Media</span>
          <h2 className="section-title text-center">{title}</h2>
        </div>

        {videos.length > 0 && (
          <>
            <h3 className="social-sub">Latest videos</h3>
            <div className="social-videos">
              {videos.map((v) => (
                <a key={v.id} href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noopener noreferrer" className="social-video-card">
                  <span className="social-video">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`} alt="" loading="lazy" width={480} height={360} />
                    <span className="social-play" aria-hidden="true">
                      <Play size={22} fill="currentColor" />
                    </span>
                  </span>
                  <span className="social-video-title">{v.title}</span>
                  {v.published && (
                    <span className="social-video-date">
                      {new Date(v.published).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                  )}
                </a>
              ))}
            </div>
          </>
        )}

        {profiles.length > 0 && (
          <div className="social-profiles">
            {profiles.map((p) => (
              <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className="social-card">
                <strong>{p.name}</strong>
                <span>{p.text}</span>
                <span className="usa-svc-link">
                  Open {p.name} <ExternalLink size={13} aria-hidden="true" />
                </span>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
