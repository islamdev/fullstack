function show_home_sec(){
    
    document.getElementById("home_sec").style.display="flex";
    document.getElementById("home_sec").style.animationName="all_sec_show";
    document.getElementById("home_sec").style.animationDuration="3s";
    document.getElementById("projects_sec").style.display="none";
    document.getElementById("resume_sec").style.display="none";
    document.getElementById("contact_sec").style.display="none";
}

function show_projects_sec(){
    document.getElementById("home_sec").style.display="none";
    document.getElementById("projects_sec").style.display="flex";
    document.getElementById("projects_sec").style.animationName="all_sec_show";
    document.getElementById("projects_sec").style.animationDuration="3s";
    document.getElementById("resume_sec").style.display="none";
    document.getElementById("contact_sec").style.display="none";
}

function show_resume_sec(){
    document.getElementById("home_sec").style.display="none";
    document.getElementById("projects_sec").style.display="none";
    document.getElementById("resume_sec").style.display="flex";
    document.getElementById("resume_sec").style.animationName="all_sec_show";
    document.getElementById("resume_sec").style.animationDuration="3s";
    document.getElementById("contact_sec").style.display="none";
}

function show_contact_sec(){
    document.getElementById("home_sec").style.display="none";
    document.getElementById("projects_sec").style.display="none";
    document.getElementById("resume_sec").style.display="none";
    document.getElementById("contact_sec").style.display="flex";
    document.getElementById("contact_sec").style.animationName="all_sec_show";
    document.getElementById("contact_sec").style.animationDuration="3s";
    
}