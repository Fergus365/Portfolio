import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

function App() {

  const sections = [
    {
      id: 1,
      title: 'Svenskradiospelare',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas sed facilis nisi, ut distinctio a dolorem illo sint eos quos dolore error itaque quidem. Culpa, nemo ad dolorem ipsam adipisci suscipit quasi, quis in molestias magnam quisquam maiores hic. Obcaecati ullam, natus sapiente molestiae quos assumenda culpa rem totam autem.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas sed facilis nisi, ut distinctio a dolorem illo sint eos quos dolore error itaque quidem. Culpa, nemo ad dolorem ipsam adipisci suscipit quasi, quis in molestias magnam quisquam maiores hic. Obcaecati ullam, natus sapiente molestiae quos assumenda culpa rem totam autem.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas sed facilis nisi, ut distinctio a dolorem illo sint eos quos dolore error itaque quidem. Culpa, nemo ad dolorem ipsam adipisci suscipit quasi, quis in molestias magnam quisquam maiores hic. Obcaecati ullam, natus sapiente molestiae quos assumenda culpa rem totam autem.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas sed facilis nisi, ut distinctio a dolorem illo sint eos quos dolore error itaque quidem. Culpa, nemo ad dolorem ipsam adipisci suscipit quasi, quis in molestias magnam quisquam maiores hic. Obcaecati ullam, natus sapiente molestiae quos assumenda culpa rem totam autem.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas sed facilis nisi, ut distinctio a dolorem illo sint eos quos dolore error itaque quidem. Culpa, nemo ad dolorem ipsam adipisci suscipit quasi, quis in molestias magnam quisquam maiores hic. Obcaecati ullam, natus sapiente molestiae quos assumenda culpa rem totam autem.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas sed facilis nisi, ut distinctio a dolorem illo sint eos quos dolore error itaque quidem. Culpa, nemo ad dolorem ipsam adipisci suscipit quasi, quis in molestias magnam quisquam maiores hic. Obcaecati ullam, natus sapiente molestiae quos assumenda culpa rem totam autem.',
      url: 'https://placehold.co/600x600',
      alt: 'Profile',
      subdomain: 'svenskradiospelare.kristofferkarlsson.se',
    },

    {
      id: 2,
      title: 'Projekt 1',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas sed facilis nisi, ut distinctio a dolorem illo sint eos quos dolore error itaque quidem. Culpa, nemo ad dolorem ipsam adipisci suscipit quasi, quis in molestias magnam quisquam maiores hic. Obcaecati ullam, natus sapiente molestiae quos assumenda culpa rem totam autem.',
      url: 'https://placehold.co/600x600',
      alt: 'Profile',
    },

    {
      id: 3,
      title: 'Projekt 2',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas sed facilis nisi, ut distinctio a dolorem illo sint eos quos dolore error itaque quidem. Culpa, nemo ad dolorem ipsam adipisci suscipit quasi, quis in molestias magnam quisquam maiores hic. Obcaecati ullam, natus sapiente molestiae quos assumenda culpa rem totam autem.',
      url: 'https://placehold.co/600x600',
      alt: 'Profile',
    },

    {
      id: 4,
      title: 'Projekt 3',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas sed facilis nisi, ut distinctio a dolorem illo sint eos quos dolore error itaque quidem. Culpa, nemo ad dolorem ipsam adipisci suscipit quasi, quis in molestias magnam quisquam maiores hic. Obcaecati ullam, natus sapiente molestiae quos assumenda culpa rem totam autem.',
      url: 'https://placehold.co/600x600',
      alt: 'Profile',
    },

    {
      id: 5,
      title: 'Projekt 4',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas sed facilis nisi, ut distinctio a dolorem illo sint eos quos dolore error itaque quidem. Culpa, nemo ad dolorem ipsam adipisci suscipit quasi, quis in molestias magnam quisquam maiores hic. Obcaecati ullam, natus sapiente molestiae quos assumenda culpa rem totam autem.',
      url: 'https://placehold.co/600x600',
      alt: 'Profile',
    },

    {
      id: 6,
      title: 'Projekt 5',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas sed facilis nisi, ut distinctio a dolorem illo sint eos quos dolore error itaque quidem. Culpa, nemo ad dolorem ipsam adipisci suscipit quasi, quis in molestias magnam quisquam maiores hic. Obcaecati ullam, natus sapiente molestiae quos assumenda culpa rem totam autem.',
      url: 'https://placehold.co/600x600',
      alt: 'Profile',
    },

    {
      id: 7,
      title: 'Projekt 6',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas sed facilis nisi, ut distinctio a dolorem illo sint eos quos dolore error itaque quidem. Culpa, nemo ad dolorem ipsam adipisci suscipit quasi, quis in molestias magnam quisquam maiores hic. Obcaecati ullam, natus sapiente molestiae quos assumenda culpa rem totam autem.',
      url: 'https://placehold.co/600x600',
      alt: 'Profile',
    },

    {
      id: 8,
      title: 'Projekt 7',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas sed facilis nisi, ut distinctio a dolorem illo sint eos quos dolore error itaque quidem. Culpa, nemo ad dolorem ipsam adipisci suscipit quasi, quis in molestias magnam quisquam maiores hic. Obcaecati ullam, natus sapiente molestiae quos assumenda culpa rem totam autem.',
      url: 'https://placehold.co/600x600',
      alt: 'Profile',
    },

    {
      id: 9,
      title: 'Projekt 8',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas sed facilis nisi, ut distinctio a dolorem illo sint eos quos dolore error itaque quidem. Culpa, nemo ad dolorem ipsam adipisci suscipit quasi, quis in molestias magnam quisquam maiores hic. Obcaecati ullam, natus sapiente molestiae quos assumenda culpa rem totam autem.',
      url: 'https://placehold.co/600x600',
      alt: 'Profile',
    },
  ]

  const handleClick = () => {
    console.log('button');
    document.getElementById('Mobile-list').classList.toggle('show');
  }

  useEffect(() => {
    const handleWindowClick = (e) => {
      if (!e.target.matches('button') && !e.target.matches('button > svg') && !e.target.matches('button > svg > path')) {
        console.log('window');
        document.getElementById('Mobile-list').classList.remove('show');
      }
    };

    window.addEventListener('click', handleWindowClick);

    return () => {
      window.removeEventListener('click', handleWindowClick);
    };
  }, []);

  return (
    <>
      <header id='Start' className="App-header">
        <div className='App-header-top'>
          <button onClick={handleClick}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <img src="null" alt="Logo" />
        </div>
        <nav className="Mobile-nav">
          <ul id='Mobile-list' className='Mobile-list'>
            <li key={`mobile-nav-key-start`}>
              <a href='#Start'>
                <h2>Start</h2>
              </a>
            </li>
            {
              sections.map(section => (
                <li key={`mobile-nav-key-${section.id}`}>
                  <a href={`#${section.id}`}>
                    <img src={section.url} alt={section.alt} />
                    <h2>{section.title}</h2>
                  </a>
                </li>
              )
              )
            }
          </ul>
        </nav>
        <div className='Hero'>
          <div className='Hero-content'>
            <h1>Kristoffer Karlsson</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus exercitationem minima autem rerum sint, harum quod quisquam veritatis quibusdam eum, quos vero dolorem? Molestiae cum numquam, quam, a aliquam harum repellendus dolorem aliquid sequi nihil ea quidem aut maxime provident! Molestiae harum quibusdam accusamus velit dolorum expedita qui suscipit laudantium!</p>
          </div>
          <div className="Hero-arrow">
            <a href='#Main'>&#x2193;</a>
          </div>
        </div>
      </header>
      <aside className="App-aside">
        <nav>
          <ul>
            <h2>Navigation</h2>
            {
              sections.map(section => (
                <li key={`aside-key-${section.id}`}>
                  <a href={`#${section.id}`}>
                    <img src={section.url} alt={section.alt} />
                    <h2>{section.title}</h2>
                  </a>
                </li>
              )
              )
            }
          </ul>
        </nav>
      </aside>
      <main id='Main' className="App-main">
        {
          sections.map(section => (
            <section key={`main-key-${section.id}`} id={section.id}>
              <div>
                <h2>{section.title}</h2>
                <p>{section.text}</p>
                <a className='btn' href={`https://${section.subdomain}`}>{section.subdomain}</a>
              </div>
              <div>
                <img src={section.url} alt={section.alt} />
              </div>
            </section>
          )
          )
        }
      </main>
    </>
  )
}

export default App
