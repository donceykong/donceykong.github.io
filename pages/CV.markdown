---
layout: page
title: CV
permalink: /cv/
---

<style>
  .cv-container {
    max-width: 900px;
    margin: 0 auto;
  }
  
  .cv-download {
    text-align: right;
    margin-bottom: 1.5rem;
  }
  
  .cv-download a {
    background-color: #2a7ae2;
    color: white;
    padding: 8px 20px;
    text-decoration: none;
    border-radius: 4px;
    font-size: 0.9rem;
    transition: background-color 0.2s;
  }
  
  .cv-download a:hover {
    background-color: #1e5ba8;
  }
  
  .cv-embed {
    width: 100%;
    height: 1000px;
    border: none;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    border-radius: 4px;
    background: white;
  }
</style>

<div class="cv-container">
  <div class="cv-download">
    <a href="{{ '/assets/pdf/donceyalbin_cv_2024.pdf' | relative_url }}" download>
      ⬇ Download PDF
    </a>
  </div>

  <iframe src="{{ '/assets/pdf/donceyalbin_cv_2024.pdf' | relative_url }}" 
          class="cv-embed"
          title="Doncey Albin CV">
  </iframe>
</div>
