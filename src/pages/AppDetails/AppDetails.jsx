import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import ReviewChart from "./ReviewChart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import lodeimage from "../../assets/icon-downloads.png"
import staricon from "../../assets/icon-ratings.png"
import handicon from "../../assets/icon-review.png"

const AppDetails = () => {
  const app = useLoaderData();
  const [installed, setInstalled] = useState(false);

  
  useEffect(() => {
    const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    if (installedApps.some(a => a.id === app.id)) {
      setInstalled(true);
    }
  }, [app.id]);

  const handleInstall = () => {
    const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    
    if (!installedApps.some(a => a.id === app.id)) {
      installedApps.push(app);
      localStorage.setItem("installedApps", JSON.stringify(installedApps));
      setInstalled(true);
      toast.success(`${app.title} installed successfully!`, { position: "top-center" });
    }
  };

  if (!app) return <p className="text-center mt-10">App not found!</p>;

  
  const ratings = [
    { name: "5★", count: Math.floor(app.reviews * 0.5) },
    { name: "4★", count: Math.floor(app.reviews * 0.3) },
    { name: "3★", count: Math.floor(app.reviews * 0.1) },
    { name: "2★", count: Math.floor(app.reviews * 0.06) },
    { name: "1★", count: Math.floor(app.reviews * 0.04) },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
     
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2">
          <img
            src={app.image}
            alt={app.title}
            className="w-full h-[300px] rounded-lg object-cover"
          />
        </div>
        
 <div className="md:w-1/2 flex flex-col justify-start">
          <h1 className="text-3xl font-bold mb-4">{app.title}</h1>
          <p className="text-gray-700 mb-2">{app.description}</p>
          <div className="flex gap-12">
        <div className="flex flex-col items-center">
          
  <img src={lodeimage} alt="" />
  <p>Downloads</p>
  <p className="mt-1 font-semibold">{app.downloads.toLocaleString()}</p>
</div>

          <div className="flex flex-col items-center">
  <img src={staricon} alt="" />
  <p>Average Ratings</p>
  <p className="mt-1 font-semibold">{app.ratingAvg}</p>
</div>


          <div className="flex flex-col items-center">
            <img src={handicon} alt="" />
            <p>Total Reviews</p>
  
  <p className="mt-1 font-semibold">{app.reviews.toLocaleString()}</p>
</div>
</div>
          
          <button
            onClick={handleInstall}
            disabled={installed}
            className={`mt-4 px-6 py-2 w-[250px] rounded-md text-white font-semibold ${
              installed
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-[#54CF68] to-[#00827A] hover:brightness-105"
            }`}
          >
            {installed ? "Installed" : "Install"}
          </button>
        </div>
      </div>

       

      
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Ratings Breakdown</h2>
        <ReviewChart ratings={ratings} />
      </div>

      
      <div className="mt-10 p-6 rounded-lg bg-gray-50">
        <h1 className="text-2xl font-bold mb-4">Description</h1>
        <p className="font-normal text-gray-700 leading-relaxed">
          This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.
          <br /><br />
          A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you’ve worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere.
          <br /><br />
          For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you’re studying for exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.
        </p>
      </div>

      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default AppDetails;
