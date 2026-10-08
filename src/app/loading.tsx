import React from 'react';

export default function Loading() {
  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
      backgroundColor: 'var(--white)',
      animation: 'fadeIn 0.2s 0.22s backwards'
    }}>
      <div style={{
        position: 'relative',
        width: '64px',
        height: '64px',
        marginBottom: '24px'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          border: '3px solid var(--primary-light)',
          borderTopColor: 'var(--primary)',
          animation: 'medregSpin 0.8s cubic-bezier(0.4, 0, 0.2, 1) infinite'
        }} />
        <div style={{
          position: 'absolute',
          inset: '8px',
          borderRadius: '50%',
          border: '2px solid transparent',
          borderBottomColor: 'var(--accent)',
          animation: 'medregSpinReverse 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite'
        }} />
      </div>

      <div style={{
        fontSize: '15px',
        fontWeight: 600,
        color: 'var(--primary)',
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        animation: 'medregPulse 1.5s ease-in-out infinite'
      }}>
        Loading Regulatory Insights...
      </div>

      {/* Modern skeleton placeholders */}
      <div style={{
        marginTop: '36px',
        width: '100%',
        maxWidth: '680px',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px'
      }}>
        <div className="skeleton-bar" style={{ height: '24px', width: '60%', margin: '0 auto', borderRadius: '6px' }} />
        <div className="skeleton-bar" style={{ height: '14px', width: '90%', margin: '0 auto', borderRadius: '4px' }} />
        <div className="skeleton-bar" style={{ height: '14px', width: '75%', margin: '0 auto', borderRadius: '4px' }} />
      </div>
    </div>
  );
}
