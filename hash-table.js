// Helper functions:
// 1. LimitedArray - has to be implemented in a functional style to be able to hide the storage
// variable via closures
function LimitedArray(limit) {
  const storage = [];

  function checkLimit(index) {
    if (typeof index !== 'number') {
      throw new Error('index has to be a number');
    }
    if (index >= limit) {
      throw new Error('Error trying to access an over-limit index');
    }
  }

  const limitedArray = {};
  limitedArray.get = function get(index) {
    checkLimit(index);
    return storage[index];
  };
  limitedArray.set = function set(index, value) {
    checkLimit(index);
    storage[index] = value;
  };
  limitedArray.each = function each(cb) {
    for (let i = 0; i < storage.length; i += 1) {
      cb(storage[i], i, storage);
    }
  };

  return limitedArray;
}

// 2. Hashing function - not sure how it works, but it just creates a random index that is well
// distributed
function getIndexBelowMaxForKey(str, max) {
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
}

// Now onto the actual HashTable class
class HashTable {
  constructor() {
    this.limit = 8; // 8 picked arbitrarily
    this.storage = limitedArray(this.limit);
  }

  insert(key, value) {
    const index = getIndexBelowMaxForKey(key, this.limit);
    let bucket;
    if (!this.storage.get(index)) {
      bucket = [];
      this.storage.set(index, bucket);
      bucket.push([key, value]);
    } else {
      bucket = this.storage.get(index);
      // in this case, before inserting need to make sure that the key:value pair doesn't already
      // exist and if it does, replace the value with the new one
      for (let i = 0; i < bucket.length; i += 1) {
        if (bucket[i][0] === key) {
          bucket[i][1] = value;
          return;
        }
      }
      // if not already in the bucket, push new tuple with key:value pair
      bucket.push([key, value]);
    }
  }

  retrieve(key) {
    const index = getIndexBelowMaxForKey(key, this.limit);
    const bucket = this.storage.get(index);
    for (let i = 0; i < bucket.length; i += 1) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
  }

  remove(key) {
    
  }
}
