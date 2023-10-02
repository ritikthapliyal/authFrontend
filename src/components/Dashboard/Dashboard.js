import './Css.css'

function Dashboard({setShowAuthPages}) {
    return (
        <div className='dashboard'>
            {
                <button className='go-to-portfolio' onClick={()=>{setShowAuthPages("0%")}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                    Back To Portfolio 
                </button>
            }
            normal user view
        </div>
    )
}

export default Dashboard