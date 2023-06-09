import { useDrawToolsStore } from '@terra/global/draw-tools-store';
import { AnimatePresence, motion } from 'framer-motion';
import { FunctionComponent } from 'react';

export const DrawTools: FunctionComponent = () => {
  const { drawToolsOpen } = useDrawToolsStore();

  return (
    <AnimatePresence>
      {drawToolsOpen ? (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.25 } }}
          exit={{ opacity: 0, x: -10, transition: { duration: 0.25 } }}
          className="absolute top-0 left-16 z-50 w-52 h-80"
        >
          <>
            <ul className="flex items-center justify-around bg-zinc-800 rounded">
              <li
                className="text-zinc-200 hover:bg-zinc-700 h-10 flex items-center justify-center rounded"
                role="button"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
                    fill="currentColor"
                  />
                </svg>
              </li>

              <li className="text-zinc-200 hover:bg-zinc-800 h-10 w-10 flex items-center justify-center rounded">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 15.2348L12 18.5681L18 15.2348V8.76521L12 5.43188L6 8.76521V15.2348ZM12 2L3 7V17L12 22L21 17V7L12 2Z"
                    fill="currentColor"
                  />
                </svg>
              </li>

              <li className="text-zinc-200 hover:bg-zinc-800 h-10 w-10 flex items-center justify-center rounded">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="-rotate-45"
                >
                  <path d="M2 11H22V13H2V11Z" fill="currentColor" />
                </svg>
              </li>

              <li className="text-zinc-200 hover:bg-zinc-800 h-10 w-10 flex items-center justify-center rounded">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12ZM13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z"
                    fill="currentColor"
                  />

                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                    fill="currentColor"
                  />
                </svg>
              </li>
            </ul>
          </>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
