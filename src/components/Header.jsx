
import { AppBar, Toolbar, styled } from "@mui/material"

const Container = styled(AppBar)`
    background: #060606;
    position: static;
    border-bottom: 1px solid #2f2f2f;
    height: 9vh;
    
`;

const Header = () => {
    const logo='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAY1BMVEUAAAD////y8vIdHR3j4+PKysqOjo6SkpL29va0tLSZmZkODg7f399AQEBPT0+6urrU1NTExMRXV1c5OTmlpaXq6uoqKipGRkafn592dnasrKxiYmJcXFyFhYU0NDQWFhZtbW1AgvknAAAEfElEQVR4nO2a4XLiMAyEG0gotMAFaKAUSnn/pzxCaWqv1okEx4S50fcXx9nIzkpWeHpyHMdxHMdxHMdxHMdxnP+RzefLaPnat4qIZZnVTLd9Cwk4Zj889y2lYTZuRGUPE6vFr6Zs0LeYC7ssZN63nG+mkaj3vuWc+Yw0ZYu+9dSsq1jUW9+Cat5iTdm+b0En5oNY07hvQTV/IFCjvgWdWIKm8hHSX3nXHTWczVf2q0agKeUHq/lsaJ/9uawGeWFOXLjLl3TUtsgHVWnN1ZufyQvb86AdUI8aFpdfBxvL3Ktf/yss120wUPSRiub3yrBBVuHEltS1iDVln2zQezhCreqQh5dN12pNM9CUMztYR+k6P+imXsEa6F/quDpIXLmPxwxUsVqj09A1YGzhQr4doYbISsVKrHO4SF9l4y7n1d0zzp93qhJx0kcK7/bBh2E8u2M1lJoypZmgHQy+EuPkHcrE0IsmfKdPFMqMitVBatVfC3mPRZtFk/Halw8DkCdH7slN0hb9ig/b9sBdz3NMD8WkXfMntR5Mk7ZE09lBmyo+dEKGqnMMHBbG7Yv+Tm41YQM/btGEdkDv0KGKWAjT1DV1wwwC1Z072LIIVUrpylu8dF+iWBimKbH1CGgHleYi9lpFqkwvqQQtV1VEUwMKXvYX8rOh4jTZQQCz6mbhZYo8TdyajmKwruCHBckXU3WJMlu7Ui9JxFn9zspDYs15BedMk+EMg02WseGIwoqSusk2xBr2xFQ/7VV2EMDuPgz6uA3dpWBA2HM9B8qkiRS6dS7H46PSZRpws5rP1JUQ8CY8Rn3o+WYHV7cXkYyDiNVCmoXFDORz2lvBX2KzFyQHWewAz0tXNF3lC/jBnFMfqzUeFmZWScxAt2RJDc+rarK0Qk4q9aYmnpBNdMl4DnZg/uJBk/Kx/kWagrZswSnVB/zUBEG0WZGgWQi0A+0JsYGFo0kIqtpUgilCWx380FGBs587D3zanmsK0enAUHTWppIhHhaMvqmowJmq9n17ox2g7RJNT1/EMFpXEO3AWB2wtVsI035lqlpSPg63fYJhFfiCvLxDVjEnV1B8gjFpYmvHO/a0Nt0lpr3pEwwa3PmpEhU4aS2mWjo3VQcssaVbjKw2HdPEr+u5crCArmmrwA+kjmdpED3GZAfEfaat1S429nmoxCcYS9Ijgepq0qxkHS994abqQLpB92cj+SDCgUTP1VQdiAM537WgCmMlRN32RRZFVaoSGs/xaFXXNlkuoEkpX9w4rVX4ZmDSM1YHh+q6q6OHwSYKhl/f8LsQlZSpjMFU/UYDmx3iE4z9fwfTqzQFmSDHxg6Wzlf8EWnTJI6j7cLDpF76qbBqtANT16jhrQ5WNTF1Lc7Mdru9zEiGTzBtrPe7nfk0neJGO7gP2Eq0nqruAfqqoed6P6Dc132+vzdQR9l6rvcidnNbc/RuxC517FvOhbBcNjdZ7kV4EHmQv98+hWerh/n39Intd91ZPsJfSgOWo5fR5lH2k+M4juM4juM4juM4juP8c/4C8wotnwXHNkYAAAAASUVORK5CYII='
    return (
        <Container>
            <Toolbar>
                <img src={logo} alt="logo" style={{ width: 50 }} />
                <h5 style={{color:"white",fontSize:"20px",paddingLeft:"9px",color:"red"}}>CodeSpot</h5>
            </Toolbar>
        </Container>
    )
}

export default Header