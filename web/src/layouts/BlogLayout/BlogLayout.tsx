import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

const BlogLayout = ({ children }) => {
  const { logOut, isAuthenticated, currentUser } = useAuth()

  return (
    <>
      <Toaster />
      <header className="relative flex items-center justify-between bg-purple-700 px-8 py-4 text-white">
        <h1 className="text-5xl font-semibold tracking-tight">
          <Link
            className="text-purple-400 transition duration-100 hover:text-purple-100"
            to={routes.home()}
          >
            Bside Blog
          </Link>
        </h1>
        <nav>
          <ul className="relative flex items-center font-light">
            <li>
              <Link
                className="rounded px-4 py-2 transition duration-100 hover:bg-purple-600"
                to={routes.about()}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="rounded px-4 py-2 transition duration-100 hover:bg-purple-600"
                to={routes.contact()}
              >
                Contact
              </Link>
            </li>
            <li>
              {isAuthenticated ? (
                <div>
                  <button type="button" onClick={logOut} className="px-4 py-2">
                    Logout
                  </button>
                </div>
              ) : (
                <Link to={routes.login()} className="px-4 py-2">
                  Login
                </Link>
              )}
            </li>
          </ul>
          {isAuthenticated && (
            <div className="absolute bottom-1 right-0 mr-12 text-xs text-purple-300">
              {currentUser.email}
            </div>
          )}
        </nav>
      </header>
      <main className="mx-auto max-w-4xl rounded-b bg-white p-12 shadow">
        {children}
      </main>
    </>
  )
}

export default BlogLayout
