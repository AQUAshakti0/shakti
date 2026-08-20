"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import ReactQuillEditor from "../components/ReactQuillEditor";

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  excerpt: string;
  content: string[];
  htmlContent?: string;
}

const initialBlogPosts: BlogPost[] = [
  {
    id: "industrial-ro-water-recycling",
    title: "How Industrial RO Plants Reduce Factory Water Costs by 60%",
    category: "RO Plants",
    date: "August 4, 2026",
    readTime: "5 min read",
    author: "Aqua Shakti Technical Team",
    image: "/ro-plant.png",
    excerpt:
      "Discover how modern multi-stage Industrial RO Plants with energy recovery devices help manufacturing facilities in Gujarat recycle process water and comply with GPCB standards.",
    content: [
      "Water scarcity and rising industrial water tariffs have made water recycling a strategic necessity for manufacturing plants across Vapi, Surat, and Ahmedabad.",
      "Industrial Reverse Osmosis (RO) systems allow facilities to reclaim up to 85% of treated wastewater for re-use in cooling towers, boiler feed, and process operations."
    ],
    htmlContent: `
      <h2>Industrial RO Efficiency Breakdown</h2>
      <p>Water scarcity and rising industrial water tariffs have made water recycling a strategic necessity for manufacturing plants across Vapi, Surat, and Ahmedabad. Industrial Reverse Osmosis (RO) systems allow facilities to reclaim up to 85% of treated wastewater for re-use in cooling towers, boiler feed, and process operations.</p>
      <h3>Key Benefits of High-Efficiency Industrial RO</h3>
      <ul>
        <li><strong>Reduced Water Procurement Costs:</strong> Re-using purified permeate decreases raw water dependency by up to 60%.</li>
        <li><strong>GPCB Environmental Compliance:</strong> Zero Liquid Discharge (ZLD) integration ensures strict adherence to Gujarat Pollution Control Board discharge norms.</li>
        <li><strong>Extended Equipment Life:</strong> High-rejection membranes remove dissolved solids (TDS &lt; 50 ppm), protecting boilers and heat exchangers from scale buildup.</li>
      </ul>
      <blockquote>"Upgrading your RO system with energy recovery devices reduces total cost of ownership by over 40% within 18 months."</blockquote>
      <p>At Aqua Shakti Industries, we design customized skid-mounted and containerized RO plants engineered specifically for tough Indian groundwater and industrial feed conditions.</p>
    `
  },
  {
    id: "boiler-chemical-treatment-guide",
    title: "Essential Specialty Chemicals for Boiler & Cooling Tower Efficiency",
    category: "Chemicals",
    date: "July 28, 2026",
    readTime: "6 min read",
    author: "Aqua Shakti Chemical Lab",
    image: "/boiler-system.png",
    excerpt:
      "A complete technical guide on antiscalants, oxygen scavengers, and corrosion inhibitors required to maintain thermal efficiency in high-pressure industrial boilers.",
    content: [
      "Unconditioned boiler feedwater causes rapid mineral scaling, tube overheating, and catastrophic corrosion. Implementing a tailored water treatment chemical program is essential for maintaining steam purity and boiler safety."
    ],
    htmlContent: `
      <h2>Preventing Boiler Scale & Thermal Efficiency Loss</h2>
      <p>Unconditioned boiler feedwater causes rapid mineral scaling, tube overheating, and catastrophic corrosion. Implementing a tailored water treatment chemical program is essential for maintaining steam purity and boiler safety.</p>
      <h3>Critical Chemical Additives Checklist:</h3>
      <ul>
        <li><strong>Oxygen Scavengers:</strong> Hydrazine and sodium sulfite formulations instantly remove dissolved oxygen, preventing pitting corrosion in steam lines.</li>
        <li><strong>RO Membrane Antiscalants:</strong> Advanced phosphonate and polycarboxylate blends prevent calcium sulfate and silica precipitation on RO membranes.</li>
        <li><strong>Sludge Conditioners:</strong> Polymer-based dispersants transform heavy precipitates into non-adherent mobile sludge easily removed via bottom blowdown.</li>
      </ul>
      <p>Our chemical formulations are batch-tested and formulated for maximum thermal stability in industrial boilers operating up to 40 kg/cm² pressure.</p>
    `
  },
  {
    id: "stp-etp-turnkey-maintenance",
    title: "STP & ETP Plant Operations: Best Maintenance Practices for ZLD",
    category: "STP & ETP",
    date: "July 15, 2026",
    readTime: "7 min read",
    author: "Operations & Maintenance Division",
    image: "/water-plant.png",
    excerpt:
      "Learn essential biological reactor maintenance, aeration control, and sludge dewatering routines to ensure 24/7 compliant STP and ETP plant operation.",
    content: [
      "Effluent Treatment Plants (ETP) and Sewage Treatment Plants (STP) are the heart of industrial environmental management."
    ],
    htmlContent: `
      <h2>Ensuring 24/7 ETP & STP Regulatory Compliance</h2>
      <p>Effluent Treatment Plants (ETP) and Sewage Treatment Plants (STP) are the heart of industrial environmental management. Inconsistent maintenance leads to bio-fouling, high BOD/COD levels, and costly operational shutdowns.</p>
      <h3>Daily Operational Checklist:</h3>
      <ol>
        <li><strong>Aeration Tank Monitoring:</strong> Maintain Dissolved Oxygen (DO) levels between 2.0 - 3.0 mg/L to sustain active nitrifying bacteria.</li>
        <li><strong>Clarifier Sludge Scraping:</strong> Prevent anaerobic septic conditions in secondary clarifiers by checking Sludge Volume Index (SVI) daily.</li>
        <li><strong>Chemical Dosing Calibration:</strong> Precise poly-electrolyte dosing ensures optimal flocculation and rapid settling in primary tube settlers.</li>
      </ol>
      <p>Aqua Shakti offers full Turnkey O&M contracts for industrial ETP and commercial STP systems across Gujarat.</p>
    `
  },
  {
    id: "extending-ro-membrane-lifespan",
    title: "5 Proven Strategies to Extend the Lifespan of RO Membranes",
    category: "Maintenance",
    date: "June 30, 2026",
    readTime: "4 min read",
    author: "Technical Support Engineering",
    image: "/chemical-dosing.png",
    excerpt:
      "Prevent bio-fouling, scaling, and mechanical membrane tearing with proper CIP cleaning cycles and chemical pretreatment strategies.",
    content: [
      "Reverse Osmosis membranes are the most critical investment in any water treatment plant."
    ],
    htmlContent: `
      <h2>Maximizing Reverse Osmosis Element Longevity</h2>
      <p>Reverse Osmosis membranes are the most critical investment in any water treatment plant. Chemical fouling and bio-film buildup reduce permeate flow and increase energy consumption.</p>
      <h3>Proactive CIP (Clean-In-Place) Steps:</h3>
      <ul>
        <li><strong>High pH Cleaning:</strong> Removes organic matter, bio-film, and oil grease.</li>
        <li><strong>Low pH Acid Cleaning:</strong> Dissolves inorganic scale including calcium carbonate and iron oxide deposits.</li>
        <li><strong>Silt Density Index (SDI) Monitoring:</strong> Ensure feed SDI is maintained below 3.0 via multi-media filtration.</li>
      </ul>
    `
  }
];

export default function BlogsPage() {
  const [posts, setPosts] = useState<BlogPost[]>(() => {
    if (typeof window !== "undefined") {
      try {
        const savedPosts = localStorage.getItem("aquashakti_blog_posts");
        if (savedPosts) {
          const parsed = JSON.parse(savedPosts);
          if (Array.isArray(parsed) && parsed.length > 0) {
            return parsed;
          }
        }
      } catch {
        // Storage error fallback
      }
    }
    return initialBlogPosts;
  });
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  // Admin Login State
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(false);
  const [isAdminLoginModalOpen, setIsAdminLoginModalOpen] = useState<boolean>(false);
  const [adminEmail, setAdminEmail] = useState("admin@aquashaktiipl.com");
  const [adminPassword, setAdminPassword] = useState("");
  const [adminLoginError, setAdminLoginError] = useState("");

  // Editor Modal State
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editingPostId, setEditingPostId] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    title: "",
    category: "RO Plants",
    author: "Aqua Shakti Team",
    readTime: "5 min read",
    image: "/ro-plant.png",
    excerpt: "",
    htmlContent: "<p>Write your blog post here using the <strong>Rich Text</strong> editor!</p>"
  });

  // Cleanup admin session on mount
  useEffect(() => {
    try {
      localStorage.removeItem("aquashakti_admin_logged_in");
    } catch {}

    // Cleanup on unmount (navigating away / pressing back)
    return () => {
      setIsAdminLoggedIn(false);
      try {
        localStorage.removeItem("aquashakti_admin_logged_in");
      } catch {}
    };
  }, []);

  const savePostsToStorage = (updatedPosts: BlogPost[]) => {
    setPosts(updatedPosts);
    try {
      localStorage.setItem("aquashakti_blog_posts", JSON.stringify(updatedPosts));
    } catch {
      // Storage error fallback
    }
  };

  const categories = ["All", "RO Plants", "Chemicals", "STP & ETP", "Maintenance"];

  const filteredPosts = selectedCategory === "All"
    ? posts
    : posts.filter((post) => post.category === selectedCategory);

  // Triggered when user clicks "+ Write Blog Post" button
  const handleWritePostClick = () => {
    if (isAdminLoggedIn) {
      openCreateEditor();
    } else {
      setIsAdminLoginModalOpen(true);
    }
  };

  const handleAdminLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!adminEmail.trim()) {
      setAdminLoginError("Please enter your admin email.");
      return;
    }
    if (!adminPassword) {
      setAdminLoginError("Please enter your admin password.");
      return;
    }

    // Credentials verified for active writing session
    setIsAdminLoggedIn(true);
    setIsAdminLoginModalOpen(false);
    setAdminLoginError("");

    // Open React Quill Blog Editor immediately
    openCreateEditor();
  };

  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false);
    try {
      localStorage.removeItem("aquashakti_admin_logged_in");
    } catch {}
  };

  const openCreateEditor = () => {
    setEditingPostId(null);
    setFormData({
      title: "",
      category: "RO Plants",
      author: "Aqua Shakti Admin",
      readTime: "5 min read",
      image: "/ro-plant.png",
      excerpt: "",
      htmlContent: "<h2>Technical Guide Title</h2><p>Compose your detailed technical blog post using rich text formatting, bullet points, and tables...</p><h3>Key Highlights</h3><ul><li>Highlight 1</li><li>Highlight 2</li></ul>"
    });
    setIsEditorOpen(true);
  };

  const openEditEditor = (post: BlogPost) => {
    setEditingPostId(post.id);
    setFormData({
      title: post.title,
      category: post.category,
      author: post.author,
      readTime: post.readTime,
      image: post.image,
      excerpt: post.excerpt,
      htmlContent: post.htmlContent || (post.content ? post.content.map(p => `<p>${p}</p>`).join("") : "")
    });
    setActivePost(null);
    setIsEditorOpen(true);
  };

  const handleSavePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim()) return;

    if (editingPostId) {
      const updated = posts.map((p) => {
        if (p.id === editingPostId) {
          return {
            ...p,
            title: formData.title,
            category: formData.category,
            author: formData.author,
            readTime: formData.readTime,
            image: formData.image,
            excerpt: formData.excerpt,
            htmlContent: formData.htmlContent
          };
        }
        return p;
      });
      savePostsToStorage(updated);
    } else {
      const newPost: BlogPost = {
        id: `post-${Date.now()}`,
        title: formData.title,
        category: formData.category,
        date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
        readTime: formData.readTime,
        author: formData.author,
        image: formData.image,
        excerpt: formData.excerpt || formData.title,
        content: [],
        htmlContent: formData.htmlContent
      };
      savePostsToStorage([newPost, ...posts]);
    }

    setIsEditorOpen(false);
    setIsAdminLoggedIn(false);
  };

  return (
    <div className="blogs-page" style={{ background: "#fbf9f4", minHeight: "100vh", padding: "40px 0 80px 0" }}>
      <div className="container">
        
        {/* Header Title & Write Blog Button */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "20px", marginBottom: "28px" }}>
          <div>
            <span style={{ fontSize: "12px", fontWeight: 800, color: "#f59e0b", letterSpacing: "1.5px", textTransform: "uppercase" }}>
              Technical Knowledge Center
            </span>
            <h1 className="page-title" style={{ color: "#0b3c26", margin: "4px 0 0 0" }}>
              Blogs &amp; Technical Insights
            </h1>
            <p className="page-intro" style={{ marginTop: "6px" }}>
              Stay updated with industry best practices, expert guides, and technological advancements in industrial RO plants, STP/ETP systems, and water treatment chemicals.
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
            {isAdminLoggedIn && (
              <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "#f4f0e6", padding: "6px 14px", borderRadius: "20px", border: "1px solid #e5dec9" }}>
                <span style={{ fontSize: "12px", fontWeight: 700, color: "#0b3c26" }}>
                  🛡️ Admin Logged In
                </span>
                <button
                  onClick={handleAdminLogout}
                  style={{ background: "none", border: "none", color: "#dc2626", fontSize: "12px", fontWeight: 700, cursor: "pointer", padding: 0 }}
                >
                  (Logout)
                </button>
              </div>
            )}

            <button
              onClick={handleWritePostClick}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "linear-gradient(135deg, #0b3c26 0%, #165e3d 100%)",
                color: "#f59e0b",
                border: "none",
                padding: "12px 24px",
                borderRadius: "8px",
                fontWeight: 800,
                fontSize: "14px",
                cursor: "pointer",
                boxShadow: "0 6px 18px rgba(11, 60, 38, 0.25)",
                transition: "all 0.2s ease"
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Write Blog Post
            </button>
          </div>
        </div>

        {/* Categories Filter Bar */}
        <div className="blog-filter-bar" style={{ display: "flex", gap: "10px", flexWrap: "wrap", margin: "24px 0" }}>
          {categories.map((cat) => {
            const isCatActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`feature-tag ${isCatActive ? "active" : ""}`}
                style={{
                  cursor: "pointer",
                  border: "none",
                  background: isCatActive ? "#0b3c26" : "#f4f0e6",
                  color: isCatActive ? "#f59e0b" : "#0b3c26",
                  padding: "8px 18px",
                  borderRadius: "6px",
                  fontWeight: 700,
                  fontSize: "13px"
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Blog Posts Grid */}
        <div className="blog-grid">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="blog-card"
              onClick={() => setActivePost(post)}
            >
              <div className="blog-card-img">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-card-body">
                <div className="blog-meta">
                  <span>{post.category}</span>
                  <span style={{ color: "#666666", fontWeight: 500 }}>{post.date}</span>
                </div>
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <div className="blog-card-footer">
                  <span style={{ fontSize: "12px", color: "#666666" }}>{post.readTime}</span>
                  <span style={{ color: "#0b3c26", fontWeight: 700, fontSize: "13px" }}>
                    Read Article &rarr;
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ---- ADMIN LOGIN MODAL ---- */}
        {isAdminLoginModalOpen && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0, 0, 0, 0.65)",
              backdropFilter: "blur(6px)",
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px"
            }}
          >
            <div
              style={{
                background: "#ffffff",
                borderRadius: "20px",
                maxWidth: "460px",
                width: "100%",
                padding: "36px 32px",
                boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
                border: "1px solid #e5dec9",
                position: "relative",
                animation: "modalFadeIn 0.25s ease-out"
              }}
            >
              {/* Close Modal Button */}
              <button
                onClick={() => setIsAdminLoginModalOpen(false)}
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  background: "#f4f0e6",
                  border: "none",
                  color: "#0b3c26",
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  fontWeight: 800,
                  fontSize: "14px",
                  cursor: "pointer"
                }}
              >
                ✕
              </button>

              {/* Admin Badge Header Icon */}
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #0b3c26 0%, #165e3d 100%)",
                  color: "#f59e0b",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px auto",
                  boxShadow: "0 6px 16px rgba(11, 60, 38, 0.2)"
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M12 8v4" strokeWidth="2.5" />
                  <path d="M12 16h.01" strokeWidth="3" />
                </svg>
              </div>

              <h2 style={{ textAlign: "center", fontSize: "22px", fontWeight: 800, color: "#0b3c26", margin: "0 0 6px 0", fontFamily: "'Inter', sans-serif" }}>
                Admin Authentication Required
              </h2>
              <p style={{ textAlign: "center", fontSize: "13.5px", color: "#64748b", margin: "0 0 20px 0", lineHeight: 1.5 }}>
                Log in with your administrator credentials to access the <strong>Blog Post Editor</strong>.
              </p>

              {/* Demo Hint Box */}
              <div style={{ background: "#fef3c7", border: "1px solid #fde047", padding: "10px 14px", borderRadius: "10px", fontSize: "12px", color: "#92400e", fontWeight: 600, marginBottom: "20px", textAlign: "center" }}>
                💡 Demo Admin Login: <strong>admin@aquashaktiipl.com</strong> / <strong>admin123</strong>
              </div>

              {adminLoginError && (
                <div style={{ background: "#fee2e2", border: "1px solid #fca5a5", color: "#b91c1c", padding: "10px 14px", borderRadius: "8px", fontSize: "13px", fontWeight: 600, marginBottom: "16px" }}>
                  {adminLoginError}
                </div>
              )}

              <form onSubmit={handleAdminLoginSubmit}>
                <div style={{ marginBottom: "16px" }}>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "#0b3c26", marginBottom: "6px" }}>
                    Admin Email
                  </label>
                  <input
                    type="email"
                    value={adminEmail}
                    onChange={(e) => setAdminEmail(e.target.value)}
                    placeholder="admin@aquashaktiipl.com"
                    style={{ width: "100%", padding: "11px 14px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "14px", outline: "none", boxSizing: "border-box", background: "#fafaf8" }}
                  />
                </div>

                <div style={{ marginBottom: "22px" }}>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "#0b3c26", marginBottom: "6px" }}>
                    Admin Password
                  </label>
                  <input
                    type="password"
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    placeholder="Enter admin password"
                    style={{ width: "100%", padding: "11px 14px", borderRadius: "8px", border: "1.5px solid #cbd5e1", fontSize: "14px", outline: "none", boxSizing: "border-box", background: "#fafaf8" }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: "100%",
                    padding: "13px",
                    borderRadius: "10px",
                    background: "linear-gradient(135deg, #0b3c26 0%, #165e3d 100%)",
                    color: "#f59e0b",
                    border: "none",
                    fontSize: "15px",
                    fontWeight: 800,
                    cursor: "pointer",
                    boxShadow: "0 6px 18px rgba(11, 60, 38, 0.25)"
                  }}
                >
                  Verify Credentials &amp; Open Quill Editor &rarr;
                </button>
              </form>
            </div>
          </div>
        )}

        {/* ---- FULL READ MODAL ---- */}
        {activePost ? (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0, 0, 0, 0.6)",
              backdropFilter: "blur(4px)",
              zIndex: 999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px"
            }}
          >
            <div
              style={{
                background: "#ffffff",
                borderRadius: "16px",
                maxWidth: "760px",
                width: "100%",
                maxHeight: "90vh",
                overflowY: "auto",
                padding: "36px",
                position: "relative",
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
              }}
            >
              <button
                onClick={() => setActivePost(null)}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  background: "#f4f0e6",
                  border: "none",
                  color: "#0b3c26",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  fontWeight: 800,
                  fontSize: "16px",
                  cursor: "pointer"
                }}
              >
                ✕
              </button>

              <div style={{ marginBottom: "16px" }}>
                <span
                  style={{
                    background: "#f59e0b",
                    color: "#0b3c26",
                    fontSize: "12px",
                    fontWeight: 800,
                    padding: "4px 10px",
                    borderRadius: "4px",
                    textTransform: "uppercase"
                  }}
                >
                  {activePost.category}
                </span>
                <span style={{ marginLeft: "12px", fontSize: "13px", color: "#666666" }}>
                  {activePost.date} &bull; {activePost.readTime}
                </span>
              </div>

              <h2 style={{ fontSize: "26px", fontWeight: 800, color: "#0b3c26", margin: "0 0 12px 0", lineHeight: "1.3" }}>
                {activePost.title}
              </h2>

              <div style={{ fontSize: "14px", color: "#526058", marginBottom: "20px" }}>
                By <strong>{activePost.author}</strong>
              </div>

              <div style={{ borderRadius: "12px", overflow: "hidden", marginBottom: "24px", maxHeight: "300px" }}>
                <img src={activePost.image} alt={activePost.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>

              {/* HTML Content (Quill Render) or Text Content */}
              {activePost.htmlContent ? (
                <div
                  className="quill-html-content"
                  dangerouslySetInnerHTML={{ __html: activePost.htmlContent }}
                />
              ) : (
                activePost.content.map((paragraph, idx) => (
                  <p key={idx} style={{ fontSize: "15px", lineHeight: "1.8", color: "#334155", marginBottom: "16px" }}>
                    {paragraph}
                  </p>
                ))
              )}

              {/* Admin Edit Trigger */}
              <div style={{ marginTop: "32px", paddingTop: "20px", borderTop: "1px solid #e2e8f0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "13px", color: "#64748b" }}>Aqua Shakti Industries Knowledge Base</span>
                
                <button
                  onClick={() => openEditEditor(activePost)}
                  style={{
                    background: "#0b3c26",
                    color: "#f59e0b",
                    border: "none",
                    padding: "8px 16px",
                    borderRadius: "6px",
                    fontWeight: 700,
                    fontSize: "13px",
                    cursor: "pointer"
                  }}
                >
                  ✏️ Edit Post
                </button>
              </div>
            </div>
          </div>
        ) : null}

        {/* ---- REACT QUILL BLOG POST EDITOR MODAL ---- */}
        {isEditorOpen ? (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0, 0, 0, 0.7)",
              backdropFilter: "blur(4px)",
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px"
            }}
          >
            <div
              style={{
                background: "#ffffff",
                borderRadius: "16px",
                maxWidth: "880px",
                width: "100%",
                maxHeight: "92vh",
                overflowY: "auto",
                padding: "32px",
                position: "relative",
                boxShadow: "0 25px 50px rgba(0,0,0,0.25)"
              }}
            >
              <button
                onClick={() => {
                  setIsEditorOpen(false);
                  setIsAdminLoggedIn(false);
                }}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  background: "#f4f0e6",
                  border: "none",
                  color: "#0b3c26",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  fontWeight: 800,
                  fontSize: "16px",
                  cursor: "pointer"
                }}
              >
                ✕
              </button>

              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                <span style={{ background: "#0b3c26", color: "#f59e0b", fontSize: "11px", fontWeight: 800, padding: "4px 8px", borderRadius: "4px", textTransform: "uppercase" }}>
                  Rich Text Editor
                </span>
                <span style={{ fontSize: "13px", color: "#64748b" }}>Admin Blog Creator</span>
              </div>

              <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#0b3c26", margin: "0 0 20px 0" }}>
                {editingPostId ? "Edit Technical Blog Post" : "Create New Technical Blog Post"}
              </h2>

              <form onSubmit={handleSavePost} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#334155", marginBottom: "6px" }}>
                    Article Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="e.g. High-Recovery Reverse Osmosis Plant Design Strategies"
                    style={{ width: "100%", padding: "10px 14px", border: "1px solid #cbd5e1", borderRadius: "6px", fontSize: "15px", fontWeight: 600 }}
                  />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#334155", marginBottom: "6px" }}>
                      Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      style={{ width: "100%", padding: "8px 12px", border: "1px solid #cbd5e1", borderRadius: "6px", fontSize: "14px", background: "#fff" }}
                    >
                      <option value="RO Plants">RO Plants</option>
                      <option value="Chemicals">Chemicals</option>
                      <option value="STP & ETP">STP &amp; ETP</option>
                      <option value="Maintenance">Maintenance</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#334155", marginBottom: "6px" }}>
                      Author Name
                    </label>
                    <input
                      type="text"
                      value={formData.author}
                      onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                      placeholder="e.g. Aqua Shakti Technical Team"
                      style={{ width: "100%", padding: "8px 12px", border: "1px solid #cbd5e1", borderRadius: "6px", fontSize: "14px" }}
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#334155", marginBottom: "6px" }}>
                      Read Time
                    </label>
                    <input
                      type="text"
                      value={formData.readTime}
                      onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                      placeholder="e.g. 5 min read"
                      style={{ width: "100%", padding: "8px 12px", border: "1px solid #cbd5e1", borderRadius: "6px", fontSize: "14px" }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#334155", marginBottom: "6px" }}>
                      Cover Image
                    </label>
                    <select
                      value={formData.image}
                      onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                      style={{ width: "100%", padding: "8px 12px", border: "1px solid #cbd5e1", borderRadius: "6px", fontSize: "14px", background: "#fff" }}
                    >
                      <option value="/ro-plant.png">RO Plant (/ro-plant.png)</option>
                      <option value="/boiler-system.png">Boiler System (/boiler-system.png)</option>
                      <option value="/water-plant.png">Water Plant (/water-plant.png)</option>
                      <option value="/chemical-dosing.png">Chemical Dosing (/chemical-dosing.png)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#334155", marginBottom: "6px" }}>
                    Short Summary / Excerpt
                  </label>
                  <input
                    type="text"
                    value={formData.excerpt}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    placeholder="Brief description for the blog card..."
                    style={{ width: "100%", padding: "8px 12px", border: "1px solid #cbd5e1", borderRadius: "6px", fontSize: "14px" }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#334155", marginBottom: "6px" }}>
                    Article Content
                  </label>
                  <ReactQuillEditor
                    value={formData.htmlContent}
                    onChange={(content) => setFormData({ ...formData, htmlContent: content })}
                    placeholder="Compose rich technical blog post content..."
                  />
                </div>

                <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px", marginTop: "16px" }}>
                  <button
                    type="button"
                    onClick={() => {
                      setIsEditorOpen(false);
                      setIsAdminLoggedIn(false);
                    }}
                    style={{ background: "#f1f5f9", color: "#475569", border: "1px solid #cbd5e1", padding: "10px 18px", borderRadius: "6px", fontWeight: 600, cursor: "pointer" }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    style={{ background: "#0b3c26", color: "#f59e0b", border: "none", padding: "10px 24px", borderRadius: "6px", fontWeight: 800, cursor: "pointer", boxShadow: "0 4px 12px rgba(11, 60, 38, 0.25)" }}
                  >
                    {editingPostId ? "Update Blog Post" : "Publish Blog Post"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
