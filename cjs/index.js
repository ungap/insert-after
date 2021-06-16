/*! (c) Andrea Giammarchi - ISC */
if (!('insertAfter' in Node.prototype))
  Node.prototype.insertAfter = function insertAfter(node, ref) {
    return this.insertBefore(node, ref ? ref.nextSibling : this.firstChild);
  };
