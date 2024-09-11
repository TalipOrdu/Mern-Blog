import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsInstagram, BsGithub, BsDribbble } from "react-icons/bs";

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-600">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-4">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-red-600 via-purple-600 to-blue-500 rounded-lg text-white">
                Talip{"'s"}
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-6 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/TalipOrdu"
                  target="_blank"
                  rel={`noopener noreferrer`}
                >
                  My Projects
                </Footer.Link>
                <Footer.Link
                  href="/"
                  target="_blank"
                  rel={`noopener noreferrer`}
                >
                  Talip{"'s"} Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow Us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/TalipOrdu"
                  target="_blank"
                  rel={`noopener noreferrer`}
                >
                  Github
                </Footer.Link>
                <Footer.Link
                  href="https://discord.com/users/776821751781785622"
                  target="_blank"
                  rel={`noopener noreferrer`}
                >
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="#"
                  target="_blank"
                  rel={`noopener noreferrer`}
                >
                  Privacy Policy
                </Footer.Link>
                <Footer.Link
                  href="#"
                  target="_blank"
                  rel={`noopener noreferrer`}
                >
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Talip's Blog" year={new Date().getFullYear()}/>
            <div className="flex gap-6 sm:mt-2 mt-4 sm:justify-center">
                <Footer.Icon href="https://www.linkedin.com/in/talipordu/" icon={BsLinkedin}/>
                <Footer.Icon href="https://www.instagram.com/talip.012/" icon={BsInstagram}/>
                <Footer.Icon href="https://github.com/TalipOrdu" icon={BsGithub}/>
                <Footer.Icon href="https://portfoliopage11.netlify.app/" icon={BsDribbble}/>
            </div>
        </div>
      </div>
    </Footer>
  );
}
