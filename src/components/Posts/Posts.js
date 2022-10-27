import React from "react";
import "./Posts.css";
const Posts = (img) => {
  return (
    <>
      <div className="postsAlg">
        <div className="post">
          <img
            className="postImg"
            src="https://topbest.ph/wp-content/uploads/7-Cutest-Insects-in-the-World-1200x900.jpg"
            alt=""
          />
          <div className="postInfo">
            <span className="postTitle">
              <div to="/post/abc" className="link">
                <a href="https://blog.rstankov.com/bug-duty-process/">
                  Bug Duty Process
                </a>
              </div>
            </span>
            <span className="postDate">3 minutes ago</span>
          </div>
        </div>
        <div className="post">
          <img
            className="postImg"
            src="https://www.theme-junkie.com/wp-content/uploads/Coding-Programming-Background-4.jpg"
            alt=""
          />
          <div className="postInfo">
            <span className="postTitle">
              <a href="https://blog.rstankov.com/design-code-for-removal/">
                THOUGHTS: Design Code Like It Will Be Removed Tomorrow
              </a>
            </span>
            <span className="postDate">posted on: 17 MAY 2021</span>
          </div>
        </div>
      </div>
      <div className="postsSecond">
        <div className="post2">
          <img
            className="postImg"
            src="https://images.unsplash.com/photo-1589959864690-24091a905ea1?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwxMjc2N3wwfDF8c2VhcmNofDR8fHRhcmdldHxlbnwwfHx8fDE2MTkyMTI0OTQ&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080"
            alt=""
          />
          <div className="postInfo">
            <span className="postTitle">
              <div className="link1">
                <a href="https://blog.rstankov.com/focus-task-first-year/">
                  <i>Year One of Focused Task</i>
                </a>
                <br></br>
                <p style={PostS}>
                  A year ago during the first COVID-19 lockdown, I started
                  working on a small macOS menubar app called 🎯 FocusedTask. I
                  used Electron, React and Redux and it is open source.
                </p>
              </div>
            </span>
            <span className="postDate"> </span>
          </div>
        </div>
      </div>
      <div className="postsAlg">
        <div className="post">
          <img
            className="postImg"
            src="https://images.unsplash.com/photo-1556711905-b3f402e1ff80?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEyNzY3fQ"
            alt=""
          />
          <div className="postInfo">
            <span className="postTitle">
              <div to="/post/abc" className="link">
                My Advice to Junior Developers{" "}
              </div>
            </span>
            <span className="postDate">posted on: 01 April 2022</span>
          </div>
          <ul>
            I talk to junior engineers a lot and find myself giving the same
            advice. So I decided to write a post about it.
          </ul>
          <ul>
            <b> Be reliable</b>
            <br></br>
            The first piece of advice I find highly important is reliability.
          </ul>
          <ul>
            <b>Take ownership</b>
            <br></br>
            By ownership, I mean taking the initiative and actively participate
            in the scoping, estimation, not only in executing your tasks.
          </ul>
          <ul>
            <b>Handling "No"</b>
            <br></br>
            You will be full of ideas, this is great. However, you will often be
            told "No". "No" is essential in product development.
          </ul>
        </div>
        <div className="post">
          <img
            className="postImg"
            src="https://images.unsplash.com/photo-1499673610122-01c7122c5dcb?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;s=362212e79fa42563e2d45ab0d9ced35d)"
            alt=""
          />
          <div className="postInfo">
            <span className="postTitle">
              <div to="/post/abc" className="link">
                Rails 5 Features, I'm Excited About{" "}
              </div>
            </span>
            <span className="postDate">posted on: 12 JULY 2016</span>
          </div>
          <ul>
            <b>API mode improvements</b>
            <br></br>
            Most of my work in Rails projects, these days is just using Rails as
            an api endpoint. There are lots of improvements.
          </ul>
          <ul>
            <b>ActiveJob improvements</b>
            <br></br>
            In a previous post - Retrying ActiveJob, there was a glue code
            depending on a Rails 5 feature - ActiveJob::Base#deserialize. Now
            that can be removed.
          </ul>
          <ul>
            <b>ActiveRecord improvements</b>
            <br></br>
            <ol>
              <li>
                <a href="https://guides.rubyonrails.org/active_record_migrations.html">
                  better and more stable migrations,
                </a>
              </li>
              <li>
                <a href="https://api.rubyonrails.org/classes/ActiveRecord/QueryMethods.html#method-i-or">
                  where.or
                </a>
              </li>
              <li>
                <a href="https://github.com/rails/rails/pull/12162">
                  ApplicationRecord.
                </a>
              </li>
              <li>
                <a href="https://github.com/rails/rails/blob/8c752c7ac739d5a86d4136ab1e9d0142c4041e58/activerecord/lib/active_record/attributes.rb">
                  New Attributes API
                </a>{" "}
              </li>
            </ol>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Posts;

const PostS = {
  fontWeight: "300",
  color: "GrayText",
  fontSize: "25px",
  fontFamily: "sans-serif",
};
