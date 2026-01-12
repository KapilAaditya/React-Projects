export default function About(props) {

    const modeClass = props.mode === 'dark' ? 'about-dark' : 'about-light';

    return (
        <div className="container about-wrapper">

            <h1 className={`about-title ${modeClass}`}>
                About This Application
            </h1>

            <div className={`about-card ${modeClass}`}>
                <button className="about-btn" data-bs-toggle="collapse" data-bs-target="#intro"
                >
                    Introduction
                </button>
                <div id="intro" className="collapse">
                    <div className="about-body">
                        This application is a modern React-based project designed to demonstrate
                        clean architecture, responsive layouts, and user-focused features.
                        It combines reusable components, controlled state management, and
                        elegant UI design principles to create a smooth and intuitive
                        experience across devices.
                    </div>
                </div>
            </div>

            <div className={`about-card ${modeClass}`}>
                <button className="about-btn" data-bs-toggle="collapse" data-bs-target="#explain"
                >
                    Explanation
                </button>
                <div id="explain" className="collapse">
                    <div className="about-body">
                        The project leverages React Hooks and React Router to enable seamless
                        navigation and real-time theme switching. Bootstrap is extended with
                        custom styling to maintain consistency, accessibility, and visual
                        clarity while allowing flexibility for future enhancements.
                    </div>
                </div>
            </div>

            <div className={`about-card ${modeClass}`}>
                <button className="about-btn" data-bs-toggle="collapse" data-bs-target="#features"
                >
                    Core Features
                </button>
                <div id="features" className="collapse">
                    <div className="about-body">
                        Core features include advanced text manipulation utilities,
                        instant alerts, responsive design, light/dark theme support,
                        and optimized performance. The structure allows easy expansion,
                        making it suitable for scaling into a full-featured web application.
                    </div>
                </div>
            </div>

            <div className={`about-card ${modeClass}`}>
                <button className="about-btn" data-bs-toggle="collapse" data-bs-target="#conclusion"
                >
                    Conclusion
                </button>
                <div id="conclusion" className="collapse">
                    <div className="about-body">
                        This project reflects industry-standard development practices and
                        serves as a strong foundation for advanced React applications.
                        It emphasizes maintainability, clarity, and usability—qualities
                        essential for real-world software development.
                    </div>
                </div>
            </div>

        </div>
    );
}
