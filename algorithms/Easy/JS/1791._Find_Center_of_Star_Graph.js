/** https://leetcode.com/problems/find-center-of-star-graph/description/ */

const findCenter = function(edges) {
    const [u1, v1] = edges[0];
    const [u2, v2] = edges[1];

    return u1 == u2 || u1 == v2 ? u1 : v1;
};