import { VscGithubAlt } from "react-icons/vsc";
import { CiShare1 }  from "react-icons/ci";

function ProjectCard({text} : {text: string}): JSX.Element {
	return <div className="project-card">
		<nav className="right-nav flex-1">
			<a className="icon-a" href="git"><VscGithubAlt size={16} color="white" /></a>
			<a className="icon-a" href="web"><CiShare1 size={16} color="white" /></a>
		</nav>
		<div className="details-block flex-8">
			<h4 className="medium-heading">Title</h4>
			<p>{text}</p>
		</div>
		<div className="tag-list flex-2">
			<p className="tag">React</p>
			<p className="tag">Node.js</p>
			<p className="tag">Express</p>
		</div>
	</div>
}

export { ProjectCard };