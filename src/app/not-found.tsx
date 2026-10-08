import Link from 'next/link';
export default function NotFound() {
  return (
    <div className='section-container flex min-h-screen flex-col items-start justify-center'>
      <p className='font-mono text-xs text-accent'>404</p>
      <h2 className='mt-2 mb-6 text-3xl font-semibold tracking-tight'>Halaman tidak ditemukan</h2>
      <Link href='/' className='btn-secondary'>Kembali ke beranda</Link>
    </div>
  );
}
