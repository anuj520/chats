import { useCallback, useEffect, useRef } from "react";
import '@/one.css';
import projects from "./../../../public/J1.json";
export const Home1 = ()=>{
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


  return(
     <section className="projects">
      <h2 className="projects-title">Successsful Projects under ProbeSTEM</h2>
      <div className="projects-grid" ref={gridRef}
      onPointerEnter={stop}
      onPointerLeave={start}
      // optional: also pause on pointer down (touch) and resume on pointer up
      onPointerDown={stop}
      onPointerUp={start}
      style={{
        overflowX: "auto",
      }}>
        {projects.map((project,index) => (          
          <div key={index} className="project-card">
            <div className="project-image"></div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="project-tag">{tag}</span>
              ))}
            </div>
            <div className="project-footer">
              <div className="project-author">
                <div className="author-avatar"></div>
                <div className="author-info">
                  <div className="author-label">Project By:</div>
                  <div className="author-name">{project.author}</div>
                  <div className="author-role">{project.role}</div>
                </div>
              </div>
              <div className="project-badges">
                <span className="badge">Desprter</span>
                <span className="badge-dot"></span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="projects-cta">
        <button className="btn-find-more">Find More Projects →</button>
      </div>
    </section>
  )
}

