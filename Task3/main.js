const courses = [
  {
    id: 1,
    cat: "design",
    categoryTitle: "Design Courses",
    title: "UI_UX Fundamentals",
    desc: "Design modern interfaces",
    price: "$55",
    rating: 3,
    students: "10 students",
    lessons: "12 lessons",
    img: "images/UIUX.jpg",
  },
  {
    id: 2,
    cat: "design",
    categoryTitle: "Design Courses",
    title: "Motion Graphic",
    desc: "Create animations",
    price: "$29",
    rating: 4,
    students: "25 students",
    lessons: "30 lessons",
    img: "images/MotionGraphics.jpg",
  },
  {
    id: 3,
    cat: "design",
    categoryTitle: "Design Courses",
    title: "Graphic Design",
    desc: "Master visual communication",
    price: "$100",
    rating: 4,
    students: "25 students",
    lessons: "25 lessons",
    img: "images/GraphicDesign.jpg",
  },
  {
    id: 4,
    cat: "design",
    categoryTitle: "Design Courses",
    title: "Video montage",
    desc: "Professional video techniques",
    price: "$20",
    rating: 5,
    students: "50 students",
    lessons: "12 lessons",
    img: "images/VideoMontage.jpg",
  },
  {
    id: 5,
    cat: "marketing",
    categoryTitle: "marketing",
    title: "Digital Marketing",
    desc: "Grow brands online",
    price: "$70",
    rating: 5,
    students: "55 students",
    lessons: "10 lessons",
    img: "images/DigitalMarketing.jpg",
  },
  {
    id: 6,
    cat: "marketing",
    categoryTitle: "marketing",
    title: "Social Media Marketing",
    desc: "Create engaging content",
    price: "$45",
    rating: 4,
    students: "15 students",
    lessons: "30 lessons",
    img: "images/SocialMediaMarketing.jpg",
  },
  {
    id: 7,
    cat: "marketing",
    categoryTitle: "marketing",
    title: "Content Marketing",
    desc: "Valuable content strategies",
    price: "$45",
    rating: 4,
    students: "25 students",
    lessons: "12 lessons",
    img: "images/ContentMarketing.jpg",
  },
  {
    id: 8,
    cat: "marketing",
    categoryTitle: "marketing",
    title: "Google Ads & Analytics",
    desc: "Master analytics & ads",
    price: "$35",
    rating: 5,
    students: "70 students",
    lessons: "18 lessons",
    img: "images/GoogleAds.jpg",
  },
  {
    id: 9,
    cat: "web",
    categoryTitle: "Web Development",
    title: "React.js Essentials",
    desc: "Modern web applications",
    price: "$90",
    rating: 3,
    students: "10 students",
    lessons: "12 lessons",
    img: "images/ReactJS.jpg",
  },
  {
    id: 10,
    cat: "web",
    categoryTitle: "Web Development",
    title: "Full-Stack Development",
    desc: "Frontend & backend",
    price: "$300",
    rating: 4,
    students: "26 students",
    lessons: "120 lessons",
    img: "images/FullStack.jpg",
  },
  {
    id: 11,
    cat: "web",
    categoryTitle: "Web Development",
    title: "Database Management",
    desc: "Efficient database design",
    price: "$87",
    rating: 4,
    students: "36 students",
    lessons: "18 lessons",
    img: "images/Database.jpg",
  },
  {
    id: 12,
    cat: "web",
    categoryTitle: "Web Development",
    title: "Front-End Development",
    desc: "Responsive interfaces",
    price: "$70",
    rating: 5,
    students: "78 students",
    lessons: "33 lessons",
    img: "images/FrontEnd.jpg",
  },
  {
    id: 13,
    cat: "security",
    categoryTitle: "Cyber Security",
    title: "Ethical Hacking",
    desc: "Penetration testing",
    price: "$55",
    rating: 3,
    students: "10 students",
    lessons: "12 lessons",
    img: "images/EthicalHacking.jpg",
  },
  {
    id: 14,
    cat: "security",
    categoryTitle: "Cyber Security",
    title: "Network Security",
    desc: "Protect systems",
    price: "$29",
    rating: 4,
    students: "25 students",
    lessons: "30 lessons",
    img: "images/NetworkSecurity.jpg",
  },
  {
    id: 15,
    cat: "security",
    categoryTitle: "Cyber Security",
    title: "Cyber security for Web",
    desc: "Secure web apps",
    price: "$100",
    rating: 4,
    students: "25 students",
    lessons: "25 lessons",
    img: "images/CyberSecurityWeb.jpg",
  },
  {
    id: 16,
    cat: "security",
    categoryTitle: "Cyber Security",
    title: "Cyber security Basic",
    desc: "Cybersecurity fundamentals",
    price: "$20",
    rating: 5,
    students: "50 students",
    lessons: "12 lessons",
    img: "images/CyberSecurityBasics.jpg",
  },
  {
    id: 17,
    cat: "writing",
    categoryTitle: "Content Writing",
    title: "Content Writing",
    desc: "Professional content creation",
    price: "$55",
    rating: 3,
    students: "10 students",
    lessons: "12 lessons",
    img: "images/ContentWriting.jpg",
  },
  {
    id: 18,
    cat: "writing",
    categoryTitle: "Content Writing",
    title: "SEO Writing",
    desc: "Optimize for search engines",
    price: "$29",
    rating: 4,
    students: "25 students",
    lessons: "30 lessons",
    img: "images/SEO.jpg",
  },
  {
    id: 19,
    cat: "writing",
    categoryTitle: "Content Writing",
    title: "Blog & Article Writing",
    desc: "Create engaging articles",
    price: "$100",
    rating: 4,
    students: "25 students",
    lessons: "25 lessons",
    img: "images/BlogWriting.jpg",
  },
  {
    id: 20,
    cat: "writing",
    categoryTitle: "Content Writing",
    title: "Copywriting Marketing",
    desc: "Sales-driven copy",
    price: "$20",
    rating: 5,
    students: "50 students",
    lessons: "12 lessons",
    img: "images/Copywriting.jpg",
  },
]

function showPage(pageName) {
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.remove("active")
    page.style.display = "none"
  })
  const selectedPage = document.getElementById(pageName)
  if (selectedPage) {
    selectedPage.style.display = "block"
    selectedPage.classList.add("active")
  }
  window.scrollTo(0, 0)
  document.getElementById("navMenu").classList.remove("active")
}
let currentFilter = "all"

function filterCourses(category) {
  currentFilter = category
  renderCourses()

  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.remove("active")
  })

  event.target.classList.add("active")
}

function renderCourses() {
  const filtered = currentFilter === "all" ? courses : courses.filter((c) => c.cat === currentFilter)

  let html = ""
  const lastCategory = ""

  const groupedCourses = {}
  filtered.forEach((c) => {
    if (!groupedCourses[c.categoryTitle]) {
      groupedCourses[c.categoryTitle] = []
    }
    groupedCourses[c.categoryTitle].push(c)
  })

  Object.keys(groupedCourses).forEach((categoryTitle) => {
    html += `<h2 class="category-title" style="grid-column: 1 / -1;">${categoryTitle}</h2>`

    groupedCourses[categoryTitle].forEach((c) => {
      const stars = "⭐".repeat(c.rating)

      html += `
      <div class="course-card">
        <img src="${c.img}" alt="${c.title}">
        <div class="course-info">
          <div class="course-title">${c.title}</div>
          <div class="course-meta">
            <div class="course-meta-row">
              <span class="course-lessons">📚 ${c.lessons}</span>
              <span class="course-students">👥 ${c.students}</span>
            </div>
            <div class="course-meta-row">
              <span class="course-rating">${stars}</span>
              <span class="course-price">${c.price}</span>
            </div>
          </div>
          <button class="btn-course" onclick="viewCourse(${c.id})">View Course</button>
        </div>
      </div>
    `
    })
  })

  document.getElementById("coursesList").innerHTML = html
}

function viewCourse(courseId) {
  const course = courses.find((c) => c.id === courseId)
  if (course) {
    if (courseId === 1) {
      showPage("courseDetail")
    }
  }
}

// Menu toggle
document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("navMenu").classList.toggle("active")
})

document.addEventListener("DOMContentLoaded", () => {
  renderCourses()
  showPage("explore")
})

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => {
        p.classList.remove('active');
        p.style.display = 'none';
        p.scrollTop = 0;
    });

    const page = document.getElementById(pageId);
    if (page) {
        page.classList.add('active');
        page.style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'instant' }); 
    }
    const links = document.querySelectorAll('.nav-menu a');
    links.forEach(link => link.classList.remove('active'));

    const activeLink = document.querySelector(
      `.nav-menu a[onclick="showPage('${pageId}')"]`
    );
    if (activeLink) activeLink.classList.add('active');

    const navMenu = document.getElementById("navMenu");
    if (navMenu) navMenu.classList.remove("show");
}
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        const navMenu = document.getElementById("navMenu");
        if (navMenu) navMenu.classList.remove("show");
    });
});

document.getElementById("menuToggle").onclick = () => {
  document.getElementById("navMenu").classList.toggle("show");
};