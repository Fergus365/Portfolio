import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

function App() {

  const sections = [
    {
      id: 1,
      title: 'proejkt 0',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas sed facilis nisi, ut distinctio a dolorem illo sint eos quos dolore error itaque quidem. Culpa, nemo ad dolorem ipsam adipisci suscipit quasi, quis in molestias magnam quisquam maiores hic. Obcaecati ullam, natus sapiente molestiae quos assumenda culpa rem totam autem.',
      url: 'https://placehold.co/600x600',
      alt: 'Profile',
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
  ]

  const handleClick = () => {
    console.log('Button clicked');
    document.getElementById('Mobile-list').classList.toggle('show');
  }

  useEffect(() => {
    const handleWindowClick = (e) => {
      if (!e.target.matches('button') && !e.target.matches('button > svg') && !e.target.matches('button > svg > path')) {
        console.log('Window clicked', e.target);
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
      <header className="App-header">
        <div>
          <button onClick={handleClick}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <img src="null" alt="Logo" />
        </div>
        <nav className="Mobile-nav">
          <ul id='Mobile-list' className='Mobile-list'>
            {
              sections.map(section => (
                <li>
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
      </header>
      <aside className="App-aside">
        <nav>
          <ul>
            {
              sections.map(section => (
                <li>
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
      <main className="App-main">
        {
          sections.map(section => (
            <section id={section.id}>
              <div>
                <h2>{section.title}</h2>
                <p>{section.text}</p>
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
