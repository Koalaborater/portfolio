import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
      <footer className="bg-background border-t">
          <div className="container mx-auto px-4 py-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div>
                      <h3 className="text-lg font-semibold mb-4">
                          Koalaborate
                      </h3>
                      <p className="text-sm text-foreground/70">
                          Transforming ideas into digital excellence since 2024.
                      </p>
                  </div>

                  <div>
                      <h4 className="text-sm font-semibold mb-4">Services</h4>
                      <ul className="space-y-2">
                          <li>
                              <Link
                                  href="#services"
                                  className="text-sm text-foreground/70 hover:text-accent"
                              >
                                  Web Development
                              </Link>
                          </li>
                          <li>
                              <Link
                                  href="#services"
                                  className="text-sm text-foreground/70 hover:text-accent"
                              >
                                  Mobile Apps
                              </Link>
                          </li>
                          <li>
                              <Link
                                  href="#services"
                                  className="text-sm text-foreground/70 hover:text-accent"
                              >
                                  Digital Marketing
                              </Link>
                          </li>
                      </ul>
                  </div>

                  <div>
                      <h4 className="text-sm font-semibold mb-4">Company</h4>
                      <ul className="space-y-2">
                          <li>
                              <Link
                                  href="#about"
                                  className="text-sm text-foreground/70 hover:text-accent"
                              >
                                  About Us
                              </Link>
                          </li>
                          <li>
                              <Link
                                  href="#projects"
                                  className="text-sm text-foreground/70 hover:text-accent"
                              >
                                  Our Projects
                              </Link>
                          </li>
                          {/* <li>
                              <Link
                                  href="#team"
                                  className="text-sm text-foreground/70 hover:text-accent"
                              >
                                  Our Team
                              </Link>
                          </li> */}
                          <li>
                              <Link
                                  href="#contact"
                                  className="text-sm text-foreground/70 hover:text-accent"
                              >
                                  Contact
                              </Link>
                          </li>
                      </ul>
                  </div>

                  <div>
                      <h4 className="text-sm font-semibold mb-4">Connect</h4>
                      <div className="flex space-x-4">
                          {/* <Link
                              href="https://twitter.com"
                              className="text-foreground/70 hover:text-accent"
                          >
                              <Twitter className="h-5 w-5" />
                          </Link> */}
                          {/* <Link
                              href="https://linkedin.com"
                              className="text-foreground/70 hover:text-accent"
                          >
                              <Linkedin className="h-5 w-5" />
                          </Link> */}
                          <Link
                              href="https://github.com/koalaborater"
                              target="_blank"
                              className="text-foreground/70 hover:text-accent"
                          >
                              <Github className="h-5 w-5" />
                          </Link>
                      </div>
                  </div>
              </div>

              <div className="mt-8 pt-8 border-t text-center text-sm text-foreground/70">
                  <p>© 2024 Koalaborate. All rights reserved.</p>
              </div>
          </div>
      </footer>
  );
}