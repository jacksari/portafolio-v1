import React from 'react'

export default function Footer({title}) {
    return (
        <div className="footer">
            <div className="redes-footer">
                <a href="https://www.npmjs.com/package/vue-paginate">Twiter</a>
                <a href="https://www.npmjs.com/package/vue-paginate">Facebook</a>
                <a href="https://www.npmjs.com/package/vue-paginate">Instagram</a>
            </div>
            <div>
                <span>© 2020 All rights reserved. {title}</span>
            </div>
        </div>
    )
}
