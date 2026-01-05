import { useCallback, useEffect, useRef } from 'react';
import '@/webinar.css';

export const Webinars = () => {
  const webinars = [
    {
      id: 1,
      title: 'Webinar 1',
      description:
        'Learn about latest research methods and collaboration techniques. Short overview placed here.',
      author: 'Dr. Priya Rao',
      role: 'Field of Research',
    },
    {
      id: 2,
      title: 'Webinar 2',
      description:
        'Practical demo and deep-dive into tools used by research teams — with Q&A.',
      author: 'Ravi Patel',
      role: 'Data Scientist',
    },
    {
      id: 3,
      title: 'Webinar 3',
      description:
        'Panel discussion with cross-disciplinary researchers — collaboration case studies.',
      author: 'Aisha Khan',
      role: 'Senior Researcher',
    },
    {
      id: 1,
      title: 'Webinar 1',
      description:
        'Learn about latest research methods and collaboration techniques. Short overview placed here.',
      author: 'Dr. Priya Rao',
      role: 'Field of Research',
    },
    {
      id: 2,
      title: 'Webinar 2',
      description:
        'Practical demo and deep-dive into tools used by research teams — with Q&A.',
      author: 'Ravi Patel',
      role: 'Data Scientist',
    },
    {
      id: 3,
      title: 'Webinar 3',
      description:
        'Panel discussion with cross-disciplinary researchers — collaboration case studies.',
      author: 'Aisha Khan',
      role: 'Senior Researcher',
    },
    {
      id: 1,
      title: 'Webinar 1',
      description:
        'Learn about latest research methods and collaboration techniques. Short overview placed here.',
      author: 'Dr. Priya Rao',
      role: 'Field of Research',
    },
    {
      id: 2,
      title: 'Webinar 2',
      description:
        'Practical demo and deep-dive into tools used by research teams — with Q&A.',
      author: 'Ravi Patel',
      role: 'Data Scientist',
    },
    {
      id: 3,
      title: 'Webinar 3',
      description:
        'Panel discussion with cross-disciplinary researchers — collaboration case studies.',
      author: 'Aisha Khan',
      role: 'Senior Researcher',
    },
    {
      id: 1,
      title: 'Webinar 1',
      description:
        'Learn about latest research methods and collaboration techniques. Short overview placed here.',
      author: 'Dr. Priya Rao',
      role: 'Field of Research',
    },
    {
      id: 2,
      title: 'Webinar 2',
      description:
        'Practical demo and deep-dive into tools used by research teams — with Q&A.',
      author: 'Ravi Patel',
      role: 'Data Scientist',
    },
    {
      id: 3,
      title: 'Webinar 3',
      description:
        'Panel discussion with cross-disciplinary researchers — collaboration case studies.',
      author: 'Aisha Khan',
      role: 'Senior Researcher',
    },
    {
      id: 1,
      title: 'Webinar 1',
      description:
        'Learn about latest research methods and collaboration techniques. Short overview placed here.',
      author: 'Dr. Priya Rao',
      role: 'Field of Research',
    },
    {
      id: 2,
      title: 'Webinar 2',
      description:
        'Practical demo and deep-dive into tools used by research teams — with Q&A.',
      author: 'Ravi Patel',
      role: 'Data Scientist',
    },
    {
      id: 3,
      title: 'Webinar 3',
      description:
        'Panel discussion with cross-disciplinary researchers — collaboration case studies.',
      author: 'Aisha Khan',
      role: 'Senior Researcher',
    },
  ];

 const gridRef = useRef<HTMLDivElement | null>(null);
const rafIdRef = useRef<number | null>(null);
const runningRef = useRef(false);
const speedRef = useRef(4);

// animation step
const step = useCallback(() => {
  const el = gridRef.current;

  if (!el) {
    if (rafIdRef.current !== null) {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }
    runningRef.current = false;
    return;
  }

  el.scrollLeft += speedRef.current;

  if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 5) {
    el.scrollLeft = 0;
  }

  rafIdRef.current = requestAnimationFrame(step);
}, []);

// ✅ START function (this was missing)
const start = useCallback(() => {
  if (runningRef.current) return;
  runningRef.current = true;
  rafIdRef.current = requestAnimationFrame(step);
}, [step]);

// stop animation
const stop = useCallback(() => {
  if (rafIdRef.current !== null) {
    cancelAnimationFrame(rafIdRef.current);
    rafIdRef.current = null;
  }
  runningRef.current = false;
}, []);

// auto start / cleanup
useEffect(() => {
  start();
  return () => stop();
}, [start, stop]);




  return (
    <section className="webinars">
      <div className="webinars-inner">
        <h2 className="webinars-title">Upcoming Webinars</h2>

        <div className="webinars-search-row">
          <div className="search-box">
            <svg className="search-icon" viewBox="0 0 24 24" width="18" height="18" aria-hidden>
              <path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
            <input type="search" className="search-input" placeholder="Search Webinars" aria-label="Search webinars" />
          </div>

          <button className="btn-host">Host Webinar</button>
        </div>

        <div className="webinars-grid"
        ref={gridRef}
      onPointerEnter={stop}
      onPointerLeave={start}
      // optional: also pause on pointer down (touch) and resume on pointer up
      onPointerDown={stop}
      onPointerUp={start}
      style={{
        overflowX: "auto",
      }}
        >
          {webinars.map((w) => (
            <article key={w.id} className="webinar-card" tabIndex={0}>
              <div className="webinar-image" aria-hidden="true" />

              <div className="webinar-body">
                <h3 className="webinar-card-title">{w.title}</h3>
                <p className="webinar-card-desc">{w.description}</p>

                <div className="webinar-actions">
                  <button className="btn-outline">Details</button>
                  <button className="btn-primary-small">Register</button>
                </div>

                <div className="webinar-meta">
                  <div className="author-avatar" />
                  <div className="author-text">
                    <div className="author-name">{w.author}</div>
                    <div className="author-role">{w.role}</div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
