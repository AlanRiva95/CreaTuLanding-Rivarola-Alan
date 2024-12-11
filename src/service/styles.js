export const styles ={
    container:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        border: '1px solid gray',
        borderRadius: '10px',
        width:'250px',
        margin: '20px auto',
        boxShadow: '0 4px 8px rgba(0,0,0.1)'
    },

    title:{
        fontSize: '24px',
        marginBottom: '20px',
        fontWeight: 'bold'
    },
    CounterContainer: {
        diplay: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '20px',
    },

    button: {
        padding: '10px 20px',
        fontSize: '12px',
        fontWeight: 'bold',
        backgroundColor: '#007bff',
        color: 'white',
        cursor: 'pointer',
        borderRadius: '5px',
    },

    disabledButton: {
        backgroundColor: '#cccccc',
        cursor: 'not-allowed',
    },
    counter: {
        fontSize: '24px',
        fontWeight: 'bold',
        textAlign: 'center',
        width: '40px',  
    },
    addButton:{
        marginTop: '10px',
        padding: '10px 15px',
        fontSize: '12px',
        fontWeight: 'bold',
        backgroundColor: '#4CAF50',
        color: 'white',
        cursor: 'pointer',
        borderRadius: '5px',



    }
}