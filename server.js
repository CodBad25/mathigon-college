const express = require('express');
const path = require('path');
const pug = require('pug');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// Static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'node_modules/@mathigon/studio/frontend/assets/images')));
app.use('/favicons', express.static(path.join(__dirname, 'node_modules/@mathigon/studio/frontend/assets/favicons')));

// Load course data
function getCourseData(courseId, locale) {
  const filePath = path.join(__dirname, 'public/content', courseId, `data_${locale}.json`);
  if (fs.existsSync(filePath)) {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  }
  const enPath = path.join(__dirname, 'public/content', courseId, `data_en.json`);
  if (fs.existsSync(enPath)) {
    return JSON.parse(fs.readFileSync(enPath, 'utf8'));
  }
  return null;
}

// Homepage
app.get('/', (req, res) => {
  const courses = ['shapes', 'circles', 'polygons', 'polyhedra', 'triangles', 'transformations',
                   'divisibility', 'linear-functions', 'probability', 'statistics', 'fractals', 'graph-theory'];

  const courseData = {};
  courses.forEach(id => {
    const data = getCourseData(id, 'fr');
    if (data) courseData[id] = data;
  });

  res.send(renderHomepage(courseData));
});

// Course pages
app.get('/course/:id/:section?', (req, res) => {
  const { id, section } = req.params;
  const data = getCourseData(id, 'fr');
  if (!data) return res.status(404).send('Course not found');

  const sectionId = section || data.sections[0]?.id;
  const sectionData = data.sections.find(s => s.id === sectionId);
  if (!sectionData) return res.status(404).send('Section not found');

  res.send(renderCourse(data, sectionData, id));
});

function renderHomepage(courseData) {
  const coursesByTab = {
    geometrie: ['shapes', 'circles', 'polygons', 'polyhedra', 'triangles', 'transformations'],
    nombres: ['divisibility', 'linear-functions'],
    proba: ['probability', 'statistics'],
    decouverte: ['fractals', 'graph-theory']
  };

  const renderCourseBlock = (id) => {
    const course = courseData[id];
    if (!course) return '';
    const sections = course.sections.map(s =>
      `<a class="course-section" href="/course/${id}/${s.id}">${s.title}</a>`
    ).join('');
    return `
      <div class="course">
        <div class="course-img" style="background-color: ${course.color}; background-image: url(${course.icon || ''});"></div>
        <h3>${course.title}</h3>
        ${sections}
      </div>`;
  };

  const renderTab = (tabId, courseIds) => {
    const isActive = tabId === 'geometrie' ? 'active' : '';
    return `<div id="${tabId}" class="tab-content ${isActive}">${courseIds.map(renderCourseBlock).join('')}</div>`;
  };

  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <title>Mathigon Collège</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="/main.css" rel="stylesheet">
  <style>
    * { box-sizing: border-box; }
    .home-header { text-align: center; padding: 60px 20px 0; background: linear-gradient(135deg, #2274E8 0%, #8032AD 100%); color: white; }
    .home-header h1 { font-size: 2.8em; margin-bottom: 15px; }
    .home-header .subtitle { font-size: 1.3em; opacity: 0.95; max-width: 800px; margin: 0 auto 30px; }
    .tabs-nav { display: flex; justify-content: center; background: rgba(0,0,0,0.3); }
    .tab-btn { background: transparent; border: none; color: rgba(255,255,255,0.7); padding: 15px 30px; font-size: 1.05em; cursor: pointer; border-bottom: 3px solid transparent; }
    .tab-btn:hover { color: white; background: rgba(255,255,255,0.1); }
    .tab-btn.active { color: white; background: rgba(255,255,255,0.15); border-bottom-color: white; }
    .container { max-width: 1000px; margin: 0 auto; padding: 40px 30px; }
    .tab-content { display: none; }
    .tab-content.active { display: block; }
    .course { border-top: 1px solid #e8e8e8; padding: 20px 10px 20px 100px; position: relative; min-height: 90px; }
    .course:first-child { border-top: none; }
    .course-img { width: 80px; height: 80px; border-radius: 8px; background-size: cover; position: absolute; left: 0; top: 20px; }
    .course h3 { margin: 0 0 12px 8px; font-size: 1.2em; }
    .course-section { display: block; padding: 7px 8px; color: #444; text-decoration: none; border-radius: 4px; }
    .course-section:hover { background: #f5f5f5; }
    .home-footer { text-align: center; padding: 40px; color: #666; border-top: 1px solid #eee; margin-top: 60px; }
  </style>
</head>
<body>
  <header><a id="logo" href="/">Mathigon Collège</a></header>
  <main>
    <div class="home-header">
      <h1>Mathigon Collège</h1>
      <p class="subtitle">Cours interactifs de mathématiques pour le collège français</p>
      <div class="tabs-nav">
        <button class="tab-btn active" data-tab="geometrie">Géométrie</button>
        <button class="tab-btn" data-tab="nombres">Nombres et algèbre</button>
        <button class="tab-btn" data-tab="proba">Probabilités et statistiques</button>
        <button class="tab-btn" data-tab="decouverte">Découverte</button>
      </div>
    </div>
    <div class="container">
      ${Object.entries(coursesByTab).map(([tab, ids]) => renderTab(tab, ids)).join('')}
      <div class="home-footer">Propulsé par Mathigon</div>
    </div>
  </main>
  <script>
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
      });
    });
  </script>
</body>
</html>`;
}

function renderCourse(course, section, courseId) {
  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <title>${section.title} - ${course.title}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="/course.css" rel="stylesheet">
  <link href="/content/${courseId}/styles.css" rel="stylesheet">
</head>
<body class="course" data-course="${courseId}">
  <header><a href="/">← Accueil</a> | <a href="/course/${courseId}">${course.title}</a></header>
  <main>
    <article>
      <h1>${section.title}</h1>
      <div class="content">${section.html || '<p>Contenu en cours de chargement...</p>'}</div>
    </article>
    <nav class="sidebar">
      ${course.sections.map(s => `<a href="/course/${courseId}/${s.id}" class="${s.id === section.id ? 'active' : ''}">${s.title}</a>`).join('')}
    </nav>
  </main>
  <script src="/course.js"></script>
  <script src="/content/${courseId}/functions.js"></script>
</body>
</html>`;
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
