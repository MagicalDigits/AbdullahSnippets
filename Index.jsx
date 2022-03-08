function useWindowSize() {
        const [size, setSize] = useState([0, 0]); // intialize dimension state
        useLayoutEffect(() => {
            function updateSize() {
                setSize([window.innerWidth, window.innerHeight]); //setting latest dimensions to state
            }
            window.addEventListener('resize', updateSize); //call updateSize whenever screen height or width is changed
            updateSize();
            return () => window.removeEventListener('resize', updateSize);
        }, []);
        return size;
 }
function ShowWindowDimensions(props) { //call this whenever you need to check dimension
        const [width, height] = useWindowSize();
        console.log(width, "x", height)
//         return <span>Window size: {width} x {height}</span>;
}
