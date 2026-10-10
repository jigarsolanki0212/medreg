'use client';

import React, { useEffect, useState } from 'react';
import EnquiryForm, { type FieldDef } from '@/components/EnquiryForm';

/**
 * Wraps <EnquiryForm /> so a card link such as `?select=<value>#book` pre-selects an option
 * (training program, exhibition or position) without making the page dynamic.
 */
export default function PrefilledForm({
  field,
  lookup,
  ...props
}: {
  field: string;
  /** Maps the `select` query value to the option label. */
  lookup: Record<string, string>;
  endpoint: string;
  fields: FieldDef[];
  submitLabel: string;
  successTitle: string;
  successText: string;
  id?: string;
}) {
  const [initial, setInitial] = useState<Record<string, string | string[]> | undefined>();
  const [key, setKey] = useState(0);

  useEffect(() => {
    const apply = () => {
      const sel = new URLSearchParams(window.location.search).get('select');
      const label = sel ? lookup[sel] : undefined;
      if (!label) return;
      const def = props.fields.find((f) => f.name === field);
      setInitial({ [field]: def?.type === 'checkboxes' ? [label] : label });
      setKey((k) => k + 1);
    };
    apply();
    window.addEventListener('popstate', apply);
    window.addEventListener('medreg:prefill', apply);
    return () => {
      window.removeEventListener('popstate', apply);
      window.removeEventListener('medreg:prefill', apply);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <EnquiryForm key={key} initial={initial} {...props} />;
}
