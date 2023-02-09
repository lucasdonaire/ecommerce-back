const { createHash } = require('crypto');

function hash(str: string): string {
    return createHash('sha256').update(str).digest('hex');
}

export default hash