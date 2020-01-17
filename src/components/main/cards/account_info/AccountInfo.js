import React from 'react';

const AccountInfo = () => {
  return (
    <>
      <div className="card card-small">
        <div className="card-body">
          <div className="border-bottom text-center card-header">
            <div className="mb-3 mx-auto">
              <img
                className="rounded-circle"
                src="images/default_profile.png"
                alt="Sierra Brooks"
                width="110"
              />
            </div>
            <h4 className="mb-0">Sierra Brooks</h4>
            <span className="text-muted d-block mb-2">Project Manager</span>
          </div>
          <div className="pt-3">
            <strong className="text-secondary">Description</strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              ut mollis arcu. Phasellus finibus aliquam aliquet.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountInfo;
