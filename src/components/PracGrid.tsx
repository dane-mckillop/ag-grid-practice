import { AgGridReact } from "ag-grid-react";
import { useMemo, useRef, useState } from "react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import sampleData from '../data/sample.json'

interface PracGridProps {

}

const PracGrid: React.FC<PracGridProps> = () => {
    const gridRef = useRef<AgGridReact>(null);
    const [rowData, setRowData] = useState(sampleData);
    const colDef = [
        { headerName: 'Type', field: 'type' },
        { headerName: 'Class', field: 'classification' },
        { headerName: 'Name', field: 'name' }
    ]
    const defaultColDef = useMemo(() => {
        return {
            flex: 1,
            editable: true
        }
    }, [])

    return (
        <div className='ag-theme-quartz' style={{ height: '50vh', width: '80vw'}}>
            <AgGridReact
                ref={gridRef}
                rowData={rowData}
                columnDefs={colDef}
                defaultColDef={defaultColDef}
            />
        </div>
    );
}

export default PracGrid;