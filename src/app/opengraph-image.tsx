import { ImageResponse } from 'next/og';
import { portfolio } from '@/data/portfolio';

export const runtime = 'edge';
export const alt = `${portfolio.personal.name} Portfolio`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#09090b',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          color: '#f4f4f5',
          border: '10px solid #27272a',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
            background: 'linear-gradient(to bottom right, #18181b, #09090b)',
            borderRadius: '20px',
            border: '1px solid #3f3f46',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
          }}
        >
          <h1
            style={{
              fontSize: '80px',
              fontWeight: 'bold',
              margin: '0 0 20px 0',
              backgroundImage: 'linear-gradient(to right, #60a5fa, #a855f7)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            {portfolio.personal.name}
          </h1>
          <p
            style={{
              fontSize: '40px',
              fontWeight: '500',
              margin: '0 0 40px 0',
              color: '#d4d4d8',
            }}
          >
            {portfolio.personal.role}
          </p>
          <div
            style={{
              display: 'flex',
              gap: '20px',
            }}
          >
            {['React', 'Next.js', 'Node.js', 'PostgreSQL'].map((tech) => (
              <div
                key={tech}
                style={{
                  background: '#27272a',
                  padding: '10px 20px',
                  borderRadius: '10px',
                  fontSize: '24px',
                  color: '#e4e4e7',
                  border: '1px solid #3f3f46',
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
