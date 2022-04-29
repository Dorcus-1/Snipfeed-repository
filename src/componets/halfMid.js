import React from 'react'
import './halfmid.css'


export default function MidHalf() {
  

    return (
      <div className='mid'>
         <div className="firstbox">
            <h5 className="add-block">Add Block</h5>
            <div className="top-icons">
             <div className="one-icon">
             <i class="fa-solid fa-hand-pointer"></i>
             <p>Custom Link</p> 
             </div>
             <div className="one-icon">
             <i class="fa-solid fa-envelope"></i> 
             <p>Mailing List</p> 
             </div>
             <div className="one-icon">
             <i class="fa-brands fa-twitter"></i>
             <p>Tweet Embed</p> 
             </div>
             <div className="one-icon">
             <i class="fa-solid fa-share-nodes"></i>
             <p>Link your Social</p> 
             </div>
             <div className="one-icon">
             <i class="fa-solid fa-text-height"></i>
             <p>Text</p> 
             </div>
             <div className="one-icon">
             <i class="fa-solid fa-music"></i>
             <p>Music/Podcast Preview</p> 
             </div>
             <div className="one-icon">
             <i class="fa-regular fa-circle-play"></i>
             <p>Video Preview</p> 
             </div>
             <div className="one-icon">
             <i class="fa-solid fa-bag-shopping"></i>
             <p>Products</p> 
             </div>
         </div>
         <hr />
         <h5 className="add-block">Monitazable Blocks</h5>
         <div className="down-icons">
         <div className="one-icon">
         <span class="material-symbols-outlined videocam">videocam</span>
           <p>Live Stream</p> 
             </div>
             <div className="one-icon">
             <span class="material-symbols-outlined campaign">campaign</span>
             <p>Q&A's</p> 
             </div>
             <div className="one-icon">
             <span class="material-symbols-outlined group">group</span>
             <p>1:1s</p> 
             </div>
             <div className="one-icon">
             <span class="material-symbols-outlined view_in_ar_new">view_in_ar_new</span>
             <p>Exclusive Content</p>  
             </div>
             <div className="one-icon">
             <span class="material-symbols-outlined favorite">favorite</span>
             <p>Tipping</p> 
             </div>
         </div>

         </div>
         <div className="dropdown">
         <span class="material-symbols-outlined">
expand_more
</span>
         </div>
         <div className="bio">
           <div className="page">
           <h5 className="page-header">Page header</h5>
           </div>
           <div className="hr">
           <hr />
           </div>
           
           <div className="under">
             <div className="pic">
               <img src="icons.jpg" alt="pic"/>
             </div>
             <div className="desc">
               <h5>Add Your Bio</h5>
               <p>Profile pic,Name and Bio</p>
             </div>
           </div>
         </div>
         <div className="bio">
           <div className="page">
           <h5 className="page-header">Social Icons</h5>
           <div className="icons">
           <span class="material-symbols-outlined">delete</span>
           <span class="material-symbols-outlined">visibility</span>
           <span class="material-symbols-outlined">apps</span>
           </div>
           </div>
           <div className="hr">
           <hr />
           </div>
           
           <div className="under">
             <div className="pic">
             <i class="fa-solid fa-share-nodes"></i>

             </div>
             <div className="desc">
               <h5>Add Social Links</h5>
               <p>Facebook,Twitter and Instagram...</p>
             </div>
           </div>
         </div>
         <div className="bio">
           <div className="page">
             <div className="page2">
             <div className="monite">
           <h5 className="page-header" id="page-header"  >
             <span>
             <span class="material-symbols-outlined star">star</span>
               </span> Monitizable</h5>
              </div>
              <div className="tipping">
               <h5 className="page-header">Social Icons</h5>
               </div>
               </div>
           <div className="icons">
           <span class="material-symbols-outlined delete">delete</span>
           <span class="material-symbols-outlined">visibility</span>
           <span class="material-symbols-outlined">apps</span>
           </div>
           </div>
           <div className="hr">
           <hr />
           </div>
           
           <div className="under">
             <div className="pic">
             <span class="material-symbols-outlined favorite">favorite</span>

             </div>
             <div className="desc">
               <h5>Tipping</h5>
               <p>Let your followers show you support! </p>
             </div>
           </div>
         </div>
      </div>
    )

}

