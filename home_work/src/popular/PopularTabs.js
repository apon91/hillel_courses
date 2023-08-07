function PopularTabs({languages, selectedLanguage, onTabChanged}) {
    return <ul className='languages'>
        {languages.map((lang, index) => (
            <li key={index}
                style={{color: index === selectedLanguage ? '#d0021b' : '#000000'}}
                onClick={() => onTabChanged(index)}>
                {lang}
            </li>
        ))}
    </ul>;
}

export default PopularTabs;