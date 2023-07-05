import { useState } from "react";
import { BlogCard } from "./BlogCard";

let BlogArr = [
  {
    title:'Blog Post Dummy Title',
    description:'Adipisicing elit, sed cddsz do eiusmod tempor incididunt adipisicing elit, sed do eiusmod tempor incididunt dolore enim',
    date:'Jun 04, 2019',
    profile:{
        name:"Jhon",
        like:40,
        comments:1
    }
  },{
    title:'Blog Post Dummy Title',
    description:'Adipisicing elit, sed cddsz do eiusmod tempor incididunt adipisicing elit, sed do eiusmod tempor incididunt dolore enim',
    date:'Mar 31, 2019',
    profile:{
        name:'Vivek',
        like:35,
        comments:4
    }
  },{
    title:'Blog Post Dummy Title',
    description:'Adipisicing elit, sed cddsz do eiusmod tempor incididunt adipisicing elit, sed do eiusmod tempor incididunt dolore enim',
    date:'Feb 03, 2019',
    profile:{
        name:'Arjun',
        like:28,
        comments:7
    }
  }
]
export const Blogs = () => {
  let [data,setData]= useState(BlogArr)
    return (
        <section className="blog-area">
        <div className="container">
            <div className="row">
                <div className="col-md-8 mx-auto">
                    <div className="section-title text-center">
                        <h3>our blog</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim exercitation ullamco laboris nisi.
                        </p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="blog-carousel">
             {
              data.map((ele,i)=><BlogCard card={ele} index={i+1} key={i}/>)
             }
          </div>
        </div>
      </div>
    </section>
    )
}