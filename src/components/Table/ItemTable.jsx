import React from 'react';

const ItemTable = ({ response, action, currentPage, postPerPage }) => {
  return (
    <div className='table-responsive'>
      <table className='table table-striped table-inverse'>
        <thead className='thead-inverse'>
          <tr className='d-flex'>
            <th className='col-1 text-center'>#</th>
            <th className='col-2'>Kode Barang</th>
            <th className='col-2'>Nama Barang</th>
            <th className='col-2 text-center'>Qty</th>
            <th className='col-2'>Kategori</th>
            <th className='col-3 text-center'>Action</th>
          </tr>
        </thead>
        <tbody>
          {response.map((value, index) => {
            const { itemId, itemName, qty, categoryName, itemCode } = value;
            const { handleEdit, handleDelete } = action;

            return (
              <tr key={index} className='d-flex'>
                <td className='col-1 text-center'>
                  {(currentPage - 1) * postPerPage + index + 1}
                </td>
                <td className='col-2'>{itemCode}</td>
                <td className='col-2'>{itemName}</td>
                <td className='col-2 text-center'>{qty}</td>
                <td className='col-2'>{categoryName}</td>
                <td className='col-3'>
                  <div className='row'>
                    <div className='col-md-6 text-center'>
                      <button
                        className='btn btn-sm btn-primary btn-icon-split'
                        onClick={() => handleEdit(itemId)}
                      >
                        <span className='icon text-white-50'>
                          <i className='fa fa-pen' aria-hidden='true'></i>
                        </span>
                        <span
                          id={`span-btn-${itemId}`}
                          className='text mr-4 pl-3'
                        >
                          Edit&nbsp;
                        </span>
                      </button>
                    </div>
                    <div className='col-md-6'>
                      <button
                        className='btn btn-sm btn-danger btn-icon-split'
                        onClick={() => handleDelete(itemId)}
                      >
                        <span className='icon text-white-50'>
                          <i className='fa fa-trash' aria-hidden='true'></i>
                        </span>
                        <span className='text mr-1 pl-3'>Delete</span>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ItemTable;
