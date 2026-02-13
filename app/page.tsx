'use client';

import { useState } from 'react';

const pages = [
  { title: '📕 Chapter 1', content: 'Hey bestie 🌸 This little book is just a reminder of how special you are.' },
  { title: '📗 Chapter 2', content: 'Thanks for all the laughs, the support, and the random memories that make life better.' },
  { title: '📘 Chapter 3', content: 'Friendship deserves to be celebrated just as much as love — maybe even more ❤️' },
  { title: '📙 Chapter 4', content: 'No matter where life takes us, I’m glad you’re part of my story.' },
  { title: '📖 The End', content: 'Happy Valentine’s Day 💝 You’re appreciated more than you know.' },
];

export default function Book() {
  const [page, setPage] = useState(0);
  const [dir, setDir] = useState<'next' | 'prev'>('next');

  const next = () => {
    if (page < pages.length - 1) {
      setDir('next');
      setPage(p => p + 1);
    }
  };

  const prev = () => {
    if (page > 0) {
      setDir('prev');
      setPage(p => p - 1);
    }
  };

  return (
    <main style={styles.container}>
      <div style={styles.scaler}>
        <div style={styles.book}>
          {/* Tap Zones */}
          <div style={styles.tapLeft} onClick={prev} />
          <div style={styles.tapRight} onClick={next} />

          {/* Page */}
          <div key={page} className={`page ${dir}`}>
            <h1 style={styles.title}>{pages[page].title}</h1>
            <p style={styles.text}>{pages[page].content}</p>
          </div>

          <div style={styles.footer}>
            {page + 1} / {pages.length}
          </div>
        </div>
      </div>

      <style jsx>{`
        .page {
          position: relative;
          height: 100%;
          transform-style: preserve-3d;
          animation-duration: 0.7s;
          animation-timing-function: ease;
          background:
          repeating-linear-gradient(
            0deg,
          rgba(0, 0, 0, 0.025),
          rgba(0, 0, 0, 0.025) 1px,
          rgba(255, 255, 255, 0.025) 2px
          );
        }

        /* NEXT → smooth forward turn */
        .page.next {
          transform-origin: left center;
          animation-name: pageNext;
        }

        /* PREV ← smooth backward turn */
        .page.prev {
          transform-origin: right center;
          animation-name: pagePrev;
        }

        @keyframes pageNext {
          from {
            opacity: 0;
            transform: translateX(40px) rotateY(-25deg);
          }
          to {
            opacity: 1;
            transform: translateX(0) rotateY(0deg);
          }
        }

        @keyframes pagePrev {
          from {
            opacity: 0;
            transform: translateX(-40px) rotateY(25deg);
          }
          to {
            opacity: 1;
            transform: translateX(0) rotateY(0deg);
          }
        }
      `}</style>

    </main>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #ff9a9e, #fad0c4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  scaler: {
    width: 'min(92vw, 400px)',
    aspectRatio: '9 / 16',
  },

  book: {
    width: '100%',
    height: '100%',
    background: '#fffaf5',
    borderRadius: '26px',
    padding: '48px 32px',
    position: 'relative',
    overflow: 'hidden',
    perspective: '2200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    fontFamily: 'serif',
  },

  title: {
    fontSize: '30px',
    marginBottom: '24px',
    color: '#9f1239',
  },

  text: {
    fontSize: '20px',
    lineHeight: '1.85',
    color: '#444',
  },

  footer: {
    textAlign: 'center',
    fontSize: '14px',
    color: '#777',
  },

  tapLeft: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '35%',
    height: '100%',
    zIndex: 20,
  },

  tapRight: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: '35%',
    height: '100%',
    zIndex: 20,
  },
};
