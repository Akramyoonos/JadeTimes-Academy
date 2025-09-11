import React from "react";

const GiBillPage = () => {
  return (
    <div className="bg-white min-h-screen font-sans px-6 lg:px-24 py-12">
      {/* Heading */}
      <div className="flex items-center mb-8">
        <div className="w-1 h-20 bg-pink-600 mr-4"></div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-snug uppercase">
          Veterans Education Benefits – GI<br /> Bill®
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-4xl text-gray-700 space-y-6">
        <p>
          Our Division of Veterans Services (DVS) is here to assist and inform veterans on
          the many programs approved for GI Bill benefits, including the Post-9/11 GI Bill.
          Our New York City, Los Angeles, and South Beach campuses are approved for the
          training of veterans and eligible persons under the provisions of the GI Bill. For
          more information please see{" "}
          <a
            href="https://www.gibill.va.gov"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:underline"
          >
            www.gibill.va.gov
          </a>.
        </p>

        <p>
          Those who enroll into any of our Certificate, Undergraduate, and Graduate programs
          that are not fully covered by the Post-9/11 GI Bill funding may qualify to receive
          a 15% discount on tuition. Application fees are also waived. Contact a NYFA Veteran
          support representative at{" "}
          <a
            href="mailto:veteran@nyfa.edu"
            className="text-pink-600 hover:underline"
          >
            veteran@nyfa.edu
          </a>{" "}
          for more information.
        </p>

        <p>
          New York Film Academy is institutionally accredited by the WASC Senior College and
          University Commission (WSCUC), 985 Atlantic Avenue, Suite 100, Alameda, CA 94501,
          510.748.9001.
        </p>

        <p>
          Listed for accreditation status on the directory of the Council for Higher
          Education Authority (CHEA){" "}
          <a
            href="https://www.chea.org/new-york-film-academy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:underline"
          >
            https://www.chea.org/new-york-film-academy
          </a>
        </p>

        <p>
          Recognized by the U.S. Department of Education as a higher education institution.
        </p>
      </div>
    </div>
  );
};

export default GiBillPage;
