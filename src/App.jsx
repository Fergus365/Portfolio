import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

function App() {
  const [userData, setUserData] = useState([]);
  const [commitsData, setCommitsData] = useState([]);

  /*useEffect(() => {
    async function fetchUser() {
      await fetch('https://api.github.com/users/Fergus365')
        .then(res => res.json())
        .then(json => setUserData(json))
        .catch(error => console.log('Ett fel med att hämta data uppstod', error));
    }

    async function fetchAllCommits(repos) {

      await fetch(`https://api.github.com/users/Fergus365/repos`)
        .then(res => res.json())
        .then(json => {
          repos = json.map((repo) => repo.name)
          console.log('HEEELLOOO', repos)
        })
        .catch(error => console.log('Ett fel med att hämta data uppstod', error));

      repos.forEach((repo) => {
        const repoName = repo
        fetch(`https://api.github.com/repos/Fergus365/${repoName}/commits`)
          .then(res => res.json())
          .then(json => {
            setCommitsData(prevCommits => [...prevCommits, ...json])
            console.log('DATA', json)
          })
          .catch(error => console.log('Ett fel med att hämta data uppstod', error));
      })

    }

    fetchUser();
    fetchAllCommits();



  }, [])*/

  // https://api.github.com/repos/Fergus365/{repo}/commits

  const sections = [
    {
      id: 1,
      title: 'Swedish Radio Service',
      text: 'This is a project developed using React, JavaScript, CSS, and HTML, where I use the Radio Browser API to fetch and play radio stations. The purpose of the project is to provide users with a simple and modern way to explore and listen to Swedish radio stations directly in the browser. The project combines modern frontend technologies with external APIs to create a smooth and responsive experience. By using the Radio Browser API, users can browse various radio stations, start and pause playback, and view information about each station.',
      url: ['./radiodesk.webp', './radiomo.webp', './radiodeskmini.webp'],
      alt: 'Swedish Radio Service preview image',
      subdomain: 'kristofferkarlsson.se/swedishradioservice',
      link: 'https://api.radio-browser.info/',
      linkText: 'Radio Browser API',
    },

    {
      id: 2,
      title: 'TitanGym',
      text: 'This is a WordPress website I created for a fictional gym brand called TitanGym. I built it using Elementor and a few helpful plugins, with smooth animations throughout to give it a modern and engaging feel. The site includes sections like maps showing gym locations, info on current and upcoming gyms, a small webshop for essentials, a blog, a services page, and detailed pages for both gym membership plans and personal trainer plans. To add more customization, especially to the blog/ archive page, I created a child theme of Hello Elementor, which gave me more control over the layout and design beyond what the standard builder allows.The end result is a responsive, user - friendly site that’s clean, functional, and built to reflect the energy of a growing gym brand.',
      url: ['./titandesk.webp', './titanmo.webp', './titandeskmini.webp'],
      alt: 'TitanGym preview image',
      subdomain: 'kristofferkarlsson.se/titangym',
      link: 'https://wordpress.org/download/',
      linkText: 'WordPress',
    },
    {
      id: 3,
      title: 'MovieLibrary',
      text: 'MovieLibrary is a project I built using React Native + Expo, making it available on both Android and iOS, as well as desktop. The app lets users browse and search for detailed movie information, such as Oscar wins, box office earnings, IMDb ratings, Rotten Tomatoes scores, and more. The data is fetched from an API I’ve created using MongoDB, Express and hosted with Render, providing a seamless and dynamic experience for movie enthusiasts on any device.',
      url: ['./moviedesk.webp', './moviemo.webp', './moviedeskmini.webp'],
      alt: 'MovieLibrary preview image',
      subdomain: 'kristofferkarlsson.se/movielibrary',
      link: 'https://projekt-node-express-api.onrender.com/movies',
      linkText: 'API',
    },
  ]

  const handleClick = () => {
    document.getElementById('Mobile-list').classList.toggle('show');
  }

  useEffect(() => {
    const handleWindowClick = (e) => {
      if (!e.target.matches('button') && !e.target.matches('button > svg') && !e.target.matches('button > svg > path')) {
        document.getElementById('Mobile-list').classList.remove('show');
      }
    };

    window.addEventListener('click', handleWindowClick);

    return () => {
      window.removeEventListener('click', handleWindowClick);
    };
  }, []);

  return (
    <div className="App">
      <header id='home' className="App-header">
        <div className='App-header-top'>
          <a href='#home'>
            <h2 className='poppins-bold'>Home</h2>
          </a>
          <button onClick={handleClick}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <nav className="Mobile-nav">
          <ul id='Mobile-list' className='Mobile-list'>
            {
              sections.map(section => (
                <li key={`mobile-nav-key-${section.id}`}>
                  <a href={`#${section.id}`}>
                    <img loading='lazy' src={section.url[2]} alt={section.alt} />
                    <h2 className='poppins-bold'>{section.title}</h2>
                  </a>
                </li>
              )
              )
            }
          </ul>
        </nav>
        <div className='Hero'>

          <div className='Hero-content'>
            <h1 className='poppins-bold'>Hello!</h1>
            <p className='nunito-sans-regular'>
              I'm currently studying to become a Webmaster at University West in Sweden, with a strong focus on both front-end and back-end development. Through my education and personal projects, I’ve gained hands-on experience building modern, responsive, and user-friendly web applications—with performance and user experience at the core.</p>
          </div>

          <div className="Hero-arrow">
            <a href='#projects'><span className='nunito-sans-bold'>My Projects</span><i class="fa-solid fa-arrow-down"></i></a>
          </div>
        </div>
      </header>
      <aside className="App-aside">
        <nav>
          <h2 className='poppins-bold'>My Projects</h2>
          <ul>
            {
              sections.map(section => (
                <li key={`aside-key-${section.id}`}>
                  <a href={`#${section.id}`}>
                    <img loading='lazy' src={section.url[2]} alt={section.alt} />
                    <h2 className='poppins-bold'>{section.title}</h2>
                  </a>
                </li>
              )
              )
            }
          </ul>
        </nav>
      </aside>
      <main id='projects' className="App-main">
        {
          sections.map(section => (
            <section key={`main-key-${section.id}`} id={section.id}>
              <div>
                <h2 className='poppins-bold'>{section.title}</h2>
                <p className='nunito-sans-regular'>{section.text}</p>
                <a className='btn nunito-sans-bold' href={`https://${section.subdomain}`}>Try it! <i class="fa-solid fa-rocket"></i></a>
                {section.link && section.linkText == 'WordPress' && (
                  <a className='btn nunito-sans-bold' href={section.link}>{section.linkText} <i class="fa-brands fa-wordpress"></i></a>
                )}
                {section.link && section.linkText.includes('API') && (
                  <a className='btn nunito-sans-bold' href={section.link}>{section.linkText} <i class="fa-solid fa-database"></i></a>
                )}
              </div>
              <div className='img-container'>
                <img loading='lazy' src={section.url[0]} alt={section.alt} />
                <img loading='lazy' src={section.url[1]} alt={section.alt} />
              </div>
            </section>
          )
          )
        }
      </main>
    </div>
  )
}

export default App
