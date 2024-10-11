import { Dropdown } from 'react-bootstrap'
import { Grid } from 'lucide-react'
import './CompanyDropdown.css' // Sposta il CSS in un file separato

const CompanyDropdown = () => {
    return (
        <Dropdown className="ml-3 company-dropdown">
            <Dropdown.Toggle
                variant="link"
                id="dropdown-company"
                className="text-light d-flex flex-column align-items-center"
                style={{ padding: '0' }}
            >
                <Grid size={20} />
                <small style={{ fontSize: '12px' }}>Per le aziende</small>
            </Dropdown.Toggle>

            <Dropdown.Menu className="p-3 bg-dark">
                <h6
                    className="text-light text-right"
                    style={{ fontSize: '14px' }}
                >
                    Esperienze
                </h6>
                <Dropdown.Divider className="bg-light" />

                <Dropdown.Item href="#">
                    <div className="d-flex align-items-start">
                        <img
                            src="https://via.placeholder.com/40"
                            alt="company-logo"
                            className="mr-2 rounded-circle"
                            width="40"
                            height="40"
                            style={{ marginRight: '10px' }}
                        />
                        <div>
                            <strong
                                className="text-light"
                                style={{ fontSize: '14px' }}
                            >
                                Full Stack Developer
                            </strong>
                            <p
                                className="text-light mb-0"
                                style={{ fontSize: '12px' }}
                            >
                                Fifty Deg • Tempo pieno
                            </p>
                            <p
                                className="text-light mb-0"
                                style={{ fontSize: '12px' }}
                            >
                                ott 2022 - Presente
                            </p>
                            <small
                                className="text-light"
                                style={{ fontSize: '12px' }}
                            >
                                git, typescript, +20 competenze
                            </small>
                        </div>
                    </div>
                </Dropdown.Item>

                <Dropdown.Divider className="bg-light" />

                <Dropdown.Item href="#">
                    <div className="d-flex align-items-start">
                        <img
                            src="https://via.placeholder.com/40"
                            alt="company-logo"
                            className="mr-2 rounded-circle"
                            width="40"
                            height="40"
                            style={{ marginRight: '10px' }}
                        />
                        <div>
                            <strong
                                className="text-light"
                                style={{ fontSize: '14px' }}
                            >
                                Frontend Developer & Language Coordinator
                            </strong>
                            <p
                                className="text-light mb-0"
                                style={{ fontSize: '12px' }}
                            >
                                Flarum • Autonomo
                            </p>
                            <p
                                className="text-light mb-0"
                                style={{ fontSize: '12px' }}
                            >
                                set 2020 - Presente
                            </p>
                            <small
                                className="text-light"
                                style={{ fontSize: '12px' }}
                            >
                                frontend, git, +6 competenze
                            </small>
                        </div>
                    </div>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default CompanyDropdown
