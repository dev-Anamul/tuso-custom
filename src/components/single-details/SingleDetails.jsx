import React from "react";

function SingleDetails() {
  return (
    <div>
      <div className="container border-y border-gray-500 py-6 space-y-5">
        <div className="flex justify-end pr-4">
          <button className="border py-2 px-4 lg:px-10 rounded border-gray-500">
            Back
          </button>
        </div>
        <div className="flex justify-between font-bold lg:text-base text-sm capitalize px-2 lg:px-0">
          <div className="lg:flex lg:space-x-6">
            <p>
              <span>system:</span>
              <span> SC+v.1.5</span>
            </p>
            <p>
              <span>Ticket No:</span>
              <span> 1005</span>
            </p>
          </div>
          <div className="lg:flex lg:space-x-6">
            <p>
              <span>date Reported:</span>
              <span> 10 Aug 2022</span>
            </p>
            <p>
              <span>Status:</span>
              <span> Open</span>
            </p>
          </div>
        </div>
        <div className="text-justify px-3 lg:px-0">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
            laudantium soluta maiores consequuntur amet aliquid voluptatibus
            velit porro quod quaerat ab similique vero unde nulla autem
            repellendus deleniti voluptatum ratione distinctio nisi sint, itaque
            officia praesentium dolorum. Ut eum optio quibusdam nobis animi quia
            obcaecati, laborum at voluptatum ullam ex eveniet, soluta quam omnis
            quasi repellat distinctio culpa nihil voluptate iure eius voluptates
            explicabo. Exercitationem nihil dolorem illo aperiam nobis soluta
            quod eum libero ab eligendi rerum consequuntur dolorum dolores ad,
            vel neque optio qui voluptatem atque? Cum pariatur quas, atque saepe
            doloremque sint quidem hic quae officiis nemo corporis sed libero
            nulla itaque nihil! Maiores praesentium velit ratione harum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingleDetails;
