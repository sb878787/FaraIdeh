import { getAuthUser } from '@/lib/auth';
import { redirect } from 'next/navigation';
import React from 'react';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default async function AdminLayout({ children }: AdminLayoutProps) {
  const user = await getAuthUser();

  // Redirect to login if not authenticated
  if (!user) {
    redirect('/login');
  }

  return <>{children}</>;
}
