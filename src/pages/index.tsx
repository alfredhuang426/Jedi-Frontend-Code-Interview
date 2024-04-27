import { Article } from "@/components/article/Article";
import { List } from "@/components/list/List";
import { ListItem } from "@/components/listItem/ListItem";
import { Welcome } from "@/components/welcome/Welcome";

export default function Home() {
  return (
    <main className="bg-amber-50 p-4 min-h-screen">
      <div className="p-4 max-w-[720px] mx-auto bg-white rounded shadow">
        <h1 className="font-bold text-4xl text-center">
          Frontend Engineer Assessment
        </h1>
        <Welcome />
        <p className="mt-4">Here's the requirements for the assessment:</p>
        <List>
          <ListItem>
            <strong>NEVER</strong> change anything in the directories named in
            the pattern
            <span className="font-bold inline mx-1 py-0.5 px-1.5 border border-amber-400 bg-amber-50 rounded">
              **/api/**
            </span>
          </ListItem>
          <ListItem>Style with tailwindcss and css file.</ListItem>
          <ListItem>
            Use
            <span className="font-bold inline mx-1 py-0.5 px-1.5 border border-amber-400 bg-amber-50 rounded">
              axios
            </span>
            to fetch data
          </ListItem>
          <ListItem>
            Implement Responsive Web Design (RWD) with a breakpoint at 768px (md
            in tailwindcss default breakpoints)
          </ListItem>
          <ListItem>
            <p>
              Submit the URL of your answer repository by
              <strong className="mx-1">
                23:59 on the 5th day after receiving the questions,
              </strong>
              and cease answering (pushing commits). For example: if you receive
              the questions on Mar 1st, you should submit the answer by 23:59 on
              Mar 5th.
            </p>
          </ListItem>
        </List>
        <p className="mt-4">Good luck! Let's get started.</p>
        <Article title="Problem 1: Refactoring">
          <p className="mt-1">
            For this task, your objective is to refactor the current page
            following your coding conventions and best practices. Look for
            opportunities to enhance code structure, eliminate redundancy,
            clarify variable names, and simplify complex logic.
          </p>
        </Article>
        <Article title="Problem 2: Maze">
          <p className="mt-1">
            For this task, your objective is to implement a page where a mouse
            traverses a maze to find cheese.
          </p>
          <p className="mt-4">
            During server-side rendering, you need to hit the
            <span className="font-bold inline mx-1 py-0.5 px-1.5 border border-amber-400 bg-amber-50 rounded">
              /api/maze
            </span>
            endpoint to fetch the maze map array and display all the maps along
            with their respective start buttons on the screen. When the user
            clicks the start button, the mouse on that map will begin to solve
            the maze using Depth-First Search (DFS), with each step taking 100
            ms.
          </p>
          <p className="mt-4">
            Meanwhile, the start button will disappear, replaced by a reset
            button. Clicking the reset button will stop the mouse's movement,
            reset the map to its initial state, and the reset button will be
            replaced by the start button again.
          </p>
          <p className="mt-4">
            <a
              className="underline font-bold text-amber-500 cursor-pointer hover:text-amber-400 mr-1"
              href="https://youtube.com/shorts/uA744cMSNK8?si=U80OGTvH3rGV17zu"
              target="_blank"
            >
              Click
            </a>
            to watch a demonstration of the expected behavior.
          </p>
          <p className="mt-4">Note that:</p>
          <List>
            <ListItem>
              Put this page at the route
              <span className="font-bold inline mx-1 py-0.5 px-1.5 border border-amber-400 bg-amber-50 rounded">
                /find-the-cheese
              </span>
              , and title it
              <strong className="mx-1">'Find the cheese'.</strong>
            </ListItem>
            <ListItem>
              Add description, "Click 'Start' to see how the mouse find the
              cheese by using DFS!", below page title
            </ListItem>
            <ListItem>
              The color of the walls is
              <span className="font-bold inline mx-1 py-0.5 px-1.5 border border-amber-400 bg-amber-50 rounded">
                green-800
              </span>
            </ListItem>
            <ListItem>
              The color of the path is
              <span className="font-bold inline mx-1 py-0.5 px-1.5 border border-amber-400 bg-amber-50 rounded">
                lime-50
              </span>
            </ListItem>
            <ListItem>
              The icon of the mouse is
              <span className="font-bold inline mx-1 py-0.5 px-1.5 border border-amber-400 bg-amber-50 rounded">
                LuRat
              </span>
              with color
              <span className="font-bold inline mx-1 py-0.5 px-1.5 border border-amber-400 bg-amber-50 rounded">
                neutral-500
              </span>
            </ListItem>
            <ListItem>
              The icon of the cheese is
              <span className="font-bold inline mx-1 py-0.5 px-1.5 border border-amber-400 bg-amber-50 rounded">
                FaCheese
              </span>
              with color
              <span className="font-bold inline mx-1 py-0.5 px-1.5 border border-amber-400 bg-amber-50 rounded">
                amber-400
              </span>
            </ListItem>
            <ListItem>
              Highlight current path with color
              <span className="font-bold inline mx-1 py-0.5 px-1.5 border border-amber-400 bg-amber-50 rounded">
                amber-200
              </span>
            </ListItem>
            <ListItem>
              The button has a background color of amber-500, and a hover
              background color of amber-400.
            </ListItem>
            <ListItem>
              <span className="font-bold inline mx-1 py-0.5 px-1.5 border border-amber-400 bg-amber-50 rounded">
                /api/maze
              </span>
              simulates an endpoint on another server, so you need to use axios
              to fetch the data.
            </ListItem>
          </List>
        </Article>
        <Article title="Problem 3: Layout">
          <p className="mt-1">
            For this task, your objective is to create and apply a global shared
            layout. The layout should consist of:
          </p>
          <List>
            <ListItem>
              A header displaying
              <strong className="mx-1">'Jedi Software'</strong> that collapses
              when scrolling up and reappears when scrolling stops.
            </ListItem>
            <ListItem>
              {" "}
              A collapsible menu offering redirection to the homepage and
              <span className="font-bold inline mx-1 py-0.5 px-1.5 border border-amber-400 bg-amber-50 rounded">
                /find-the-cheese
              </span>
              .
            </ListItem>
          </List>
        </Article>
      </div>
    </main>
  );
}
