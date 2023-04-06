import React from 'react'
import {
  CAlert,
  CAlertHeading,
  CAlertLink,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CTableBody,
  CButtonGroup,
  CContainer,
} from '@coreui/react'

const Alerts = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Group</strong>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CContainer>
                <CCol xs={4}>
                  <CButton color="info">Add New Group</CButton>
                  <p></p>
                </CCol>
              </CContainer>
            </CRow>
            <CRow>
              <CContainer>
                <CTable striped responsive="xxl">
                  <CTableHead color="dark">
                    <CTableRow>
                      <CTableHeaderCell scope="col" width="30%">
                        Kode
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" width="30%">
                        Deskripsi
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" width="20%">
                        Status
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" width="20%">
                        Update
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" width="30%">
                        Action
                      </CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    <CTableRow>
                      <CTableDataCell>001</CTableDataCell>
                      <CTableDataCell>001</CTableDataCell>
                      <CTableDataCell>001</CTableDataCell>
                      <CTableDataCell>001</CTableDataCell>
                      <CTableDataCell>
                        <CButtonGroup role="group" aria-label="Basic example">
                          <CButton color="danger">Deactive</CButton>
                          <CButton color="warning">Edit</CButton>
                        </CButtonGroup>
                      </CTableDataCell>
                    </CTableRow>
                  </CTableBody>
                </CTable>
              </CContainer>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Alerts
