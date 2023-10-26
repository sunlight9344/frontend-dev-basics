/**
 * default parameter
 */

const print = function(strs, end='-') {
    console.log(strs.join(end));
}

print(['Always', 'with', 'me']);
print(['Always', 'with', 'me'], '');