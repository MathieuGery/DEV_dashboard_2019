import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class SideBar extends React.Component {
    render() {
        return (
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                        <div className="font-bold text-5xl mb-2">This is a title</div>
                        <p className="text-gray-700 text-base text-3xl">
                            fzaoifzajf jzafizafoijzaifozajfeoia jzifjoizafijdsiqjf oiqjifej oijsoiqjifjqljes ifjiajzeoi fj
                        </p>
                    </div>
                <div className="px-6 py-4">
                    <span
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
                    <span
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                    <span
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
                </div>
            </div>
        );
    }
}

export default SideBar;
