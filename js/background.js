let time_block=300;

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ time_block });
    console.log('Default time block set', `time: ${time_block}`);
});
