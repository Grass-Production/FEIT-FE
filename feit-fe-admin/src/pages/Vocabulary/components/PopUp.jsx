export const PopUpCreate = ({ lesson, handleClose }) => {
    function OnClickClose() {
        handleClose(false);
    }
    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 sm:items-center sm:p-0">
                        <div class="relative p-4 w-full max-w-md max-h-full">
                            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Create New Unit</h3>
                                    <button
                                        type="button"
                                        onClick={OnClickClose}
                                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                        data-modal-toggle="crud-modal">
                                        <svg
                                            class="w-3 h-3"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 14 14">
                                            <path
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                            />
                                        </svg>
                                        <span class="sr-only">Close modal</span>
                                    </button>
                                </div>
                                <form onSubmit={handleCreateImages} className=" flex  flex-col">
                                    <input
                                        type="text"
                                        name="word"
                                        value={formInput.word}
                                        onChange={handleChange}
                                        placeholder="Word"
                                    />
                                    <input
                                        type="text"
                                        name="part_of_speech"
                                        value={formInput.part_of_speech}
                                        onChange={handleChange}
                                        placeholder="Part of Speech"
                                    />
                                    <input
                                        type="text"
                                        name="pronunciation"
                                        value={formInput.pronunciation}
                                        onChange={handleChange}
                                        placeholder="Pronunciation"
                                    />
                                    <input
                                        type="text"
                                        name="mean"
                                        value={formInput.mean}
                                        onChange={handleChange}
                                        placeholder="Mean"
                                    />
                                    <input
                                        type="text"
                                        name="example_vie"
                                        value={formInput.example_vie}
                                        onChange={handleChange}
                                        placeholder="Example (Vietnamese)"
                                    />
                                    <input
                                        type="text"
                                        name="example_eng"
                                        value={formInput.example_eng}
                                        onChange={handleChange}
                                        placeholder="Example (English)"
                                    />
                                    <input
                                        type="text"
                                        name="explain_vie"
                                        value={formInput.explain_vie}
                                        onChange={handleChange}
                                        placeholder="Explanation (Vietnamese)"
                                    />
                                    <input
                                        type="text"
                                        name="explain_eng"
                                        value={formInput.explain_eng}
                                        onChange={handleChange}
                                        placeholder="Explanation (English)"
                                    />
                                    <input
                                        type="text"
                                        name="field_of_it"
                                        value={formInput.field_of_it}
                                        onChange={handleChange}
                                        placeholder="Field of IT"
                                    />
                                    <input
                                        type="text"
                                        name="link_url"
                                        value={formInput.link_url}
                                        onChange={handleChange}
                                        placeholder="Link URL"
                                    />
                                    <input
                                        type="text"
                                        name="unit_id"
                                        value={formInput.unit_id}
                                        onChange={handleChange}
                                        placeholder="Unit ID"
                                    />
                                    <input type="file" multiple onChange={(e) => setFile(e.target.files[0])} />
                                    <button type="submit">Create</button>
                                </form>
                                ;
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
