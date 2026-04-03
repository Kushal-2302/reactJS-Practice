
const Basic = () => {
    let num = 100;
    let fname = "Dinga";
    return (
        <>
        {/* Dynamic Content */}
        <h2>{num}😎</h2>
        <h2>{fname}</h2>

        {/* Static & Dynamic Content */}
        <h4>My name is {fname}</h4>

        {/* Static Content */}
        <h1>Iam Basic Component</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, voluptatem?</p>
        </>
    )
}

export default Basic