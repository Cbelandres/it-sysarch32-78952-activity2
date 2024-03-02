import React from 'react'
import Student from './Student'

function Content() {
    const students =[
        {
            image: "https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp",
            name: "Belandres Criselda",
            email: "crizeldabelandres@gmail.com"
        },
        {
            image: "https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp",
            name: "Belandres Criselda",
            email: "crizeldabelandres@gmail.com"
        },
        {
            image: "https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp",
            name: "Belandres Criselda",
            email: "crizeldabelandres@gmail.com"
        },
        {
            image: "https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp",
            name: "Belandres Criselda",
            email: "crizeldabelandres@gmail.com"
        }
    ]
    return (
        <div>
            <h2 className = 'font-semibold'>Content</h2>
            <div className= 'flex flex-wrap gap-5 mt-2 wrapper'>
                {
                    students.map(student => {
                        return <Student student={student} key= {student.name} />
                    })}
        </div>
    </div>
    )
}

export default Content