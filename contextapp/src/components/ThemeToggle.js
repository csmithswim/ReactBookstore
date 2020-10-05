import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default function ThemeToggle() {
    const { toggleTheme } = useContext(ThemeContext);
    return (
        <div>
            <button onClick={toggleTheme}> Toggle the theme</button>
        </div>
    )
}

//Class component
// export default class ThemeToggle extends Component {
//     static contextType = ThemeContext;
//       render() {
//           const { toggleTheme } = this.context
//         return (
//             <button onClick={toggleTheme}> Toggle the theme</button>
//         )
//     }
// }