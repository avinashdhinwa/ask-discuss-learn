import React from 'react';

function NavBar() {
    const links = {
        activity: { name: 'Activity', link: '#' },
        profile: { name: 'Profile', link: '#' },
        logout: { name: 'Logout', link: '#' }
    };

    const linksComponent = (
        <React.Fragment>
            <li className='nav-item'>
                <a className='nav-link' href={links.activity.link}>
                    {links.activity.name}
                </a>
            </li>
            <li className='nav-item'>
                <a className='nav-link' href={links.profile.link}>
                    {links.profile.name}
                </a>
            </li>
            <li className='nav-item'>
                <a className='nav-link' href={links.logout.link}>
                    {links.logout.name}
                </a>
            </li>
        </React.Fragment>
    );

    return (
        <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
            <a className='navbar-brand' href='#'>
                Ask Discuss Learn
            </a>
            <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarNav'
                aria-controls='navbarNav'
                aria-expanded='false'
                aria-label='Toggle navigation'
            >
                <span className='navbar-toggler-icon' />
            </button>
            <div
                className=' collapse navbar-collapse justify-content-end'
                id='navbarNav'
            >
                <form className='form-inline'>
                    <input
                        className='form-control mr-sm-2'
                        type='search'
                        placeholder='Search'
                        aria-label='Search'
                    />
                    <button
                        className='btn btn-outline-success my-2 my-sm-0'
                        type='submit'
                    >
                        Search
                    </button>
                </form>

                <ul className='navbar-nav'>{linksComponent}</ul>
            </div>
        </nav>
    );
}

export default NavBar;
