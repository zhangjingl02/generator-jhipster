'use strict';

// all constants used throughout all generators

const MAIN_DIR = 'src/main/';
const TEST_DIR = 'src/test/';

// Note: this will be prepended with 'target/' for Maven, or with 'build/' for Gradle.
const CLIENT_DIST_DIR = 'www/';

const RESERVED_WORDS_JAVA = ['ABSTRACT', 'CONTINUE', 'FOR', 'NEW', 'SWITCH', 'ASSERT', 'DEFAULT', 'GOTO', 'PACKAGE', 'SYNCHRONIZED', 'BOOLEAN', 'DO', 'IF', 'PRIVATE', 'THIS', 'BREAK', 'DOUBLE', 'IMPLEMENTS', 'PROTECTED', 'THROW', 'BYTE', 'ELSE', 'IMPORT', 'PUBLIC', 'THROWS', 'CASE', 'ENUM', 'INSTANCEOF', 'RETURN', 'TRANSIENT', 'CATCH', 'EXTENDS', 'INT', 'SHORT', 'TRY', 'CHAR', 'FINAL', 'INTERFACE', 'STATIC', 'VOID', 'CLASS', 'FINALLY', 'LONG', 'STRICTFP', 'VOLATILE', 'CONST', 'FLOAT', 'NATIVE', 'SUPER', 'WHILE'];

const RESERVED_WORDS_MYSQL = ['ACCESSIBLE', 'ADD', 'ALL', 'ALTER', 'ANALYZE', 'AND', 'AS', 'ASC', 'ASENSITIVE', 'BEFORE', 'BETWEEN', 'BIGINT', 'BINARY', 'BLOB', 'BOTH', 'BY', 'CALL', 'CASCADE', 'CASE', 'CHANGE', 'CHAR', 'CHARACTER', 'CHECK', 'COLLATE', 'COLUMN', 'CONDITION', 'CONSTRAINT', 'CONTINUE', 'CONVERT', 'CREATE', 'CROSS', 'CURRENT_DATE', 'CURRENT_TIME', 'CURRENT_TIMESTAMP', 'CURRENT_USER', 'CURSOR', 'DATABASE', 'DATABASES', 'DAY_HOUR', 'DAY_MICROSECOND', 'DAY_MINUTE', 'DAY_SECOND', 'DEC', 'DECIMAL', 'DECLARE', 'DEFAULT', 'DELAYED', 'DELETE', 'DESC', 'DESCRIBE', 'DETERMINISTIC', 'DISTINCT', 'DISTINCTROW', 'DIV', 'DOUBLE', 'DROP', 'DUAL', 'EACH', 'ELSE', 'ELSEIF', 'ENCLOSED', 'ESCAPED', 'EXISTS', 'EXIT', 'EXPLAIN', 'FALSE', 'FETCH', 'FLOAT', 'FLOAT4', 'FLOAT8', 'FOR', 'FORCE', 'FOREIGN', 'FROM', 'FULLTEXT', 'GRANT', 'GROUP', 'HAVING', 'HIGH_PRIORITY', 'HOUR_MICROSECOND', 'HOUR_MINUTE', 'HOUR_SECOND', 'IF', 'IGNORE', 'IN', 'INDEX', 'INFILE', 'INNER', 'INOUT', 'INSENSITIVE', 'INSERT', 'INT', 'INT1', 'INT2', 'INT3', 'INT4', 'INT8', 'INTEGER', 'INTERVAL', 'INTO', 'IS', 'ITERATE', 'JOIN', 'KEY', 'KEYS', 'KILL', 'LEADING', 'LEAVE', 'LEFT', 'LIKE', 'LIMIT', 'LINEAR', 'LINES', 'LOAD', 'LOCALTIME', 'LOCALTIMESTAMP', 'LOCK', 'LONG', 'LONGBLOB', 'LONGTEXT', 'LOOP', 'LOW_PRIORITY', 'MASTER_SSL_VERIFY_SERVER_CERT', 'MATCH', 'MAXVALUE', 'MEDIUMBLOB', 'MEDIUMINT', 'MEDIUMTEXT', 'MIDDLEINT', 'MINUTE_MICROSECOND', 'MINUTE_SECOND', 'MOD', 'MODIFIES', 'NATURAL', 'NOT', 'NO_WRITE_TO_BINLOG', 'NULL', 'NUMERIC', 'ON', 'OPTIMIZE', 'OPTION', 'OPTIONALLY', 'OR', 'ORDER', 'OUT', 'OUTER', 'OUTFILE', 'PRECISION', 'PRIMARY', 'PROCEDURE', 'PURGE', 'RANGE', 'READ', 'READS', 'READ_WRITE', 'REAL', 'REFERENCES', 'REGEXP', 'RELEASE', 'RENAME', 'REPEAT', 'REPLACE', 'REQUIRE', 'RESIGNAL', 'RESTRICT', 'RETURN', 'REVOKE', 'RIGHT', 'RLIKE', 'SCHEMA', 'SCHEMAS', 'SECOND_MICROSECOND', 'SELECT', 'SENSITIVE', 'SEPARATOR', 'SET', 'SHOW', 'SIGNAL', 'SMALLINT', 'SPATIAL', 'SPECIFIC', 'SQL', 'SQLEXCEPTION', 'SQLSTATE', 'SQLWARNING', 'SQL_BIG_RESULT', 'SQL_CALC_FOUND_ROWS', 'SQL_SMALL_RESULT', 'SSL', 'STARTING', 'STRAIGHT_JOIN', 'TABLE', 'TERMINATED', 'THEN', 'TINYBLOB', 'TINYINT', 'TINYTEXT', 'TO', 'TRAILING', 'TRIGGER', 'TRUE', 'UNDO', 'UNION', 'UNIQUE', 'UNLOCK', 'UNSIGNED', 'UPDATE', 'USAGE', 'USE', 'USING', 'UTC_DATE', 'UTC_TIME', 'UTC_TIMESTAMP', 'VALUES', 'VARBINARY', 'VARCHAR', 'VARCHARACTER', 'VARYING', 'WHEN', 'WHERE', 'WHILE', 'WITH', 'WRITE', 'XOR', 'YEAR_MONTH', 'ZEROFILL', 'GENERAL', 'IGNORE_SERVER_IDS', 'MASTER_HEARTBEAT_PERIOD', 'MAXVALUE', 'RESIGNAL', 'SIGNAL', 'SLOW'];

const RESERVED_WORDS_POSGRES = ['ALL', 'ANALYSE', 'ANALYZE', 'AND', 'ANY', 'ARRAY', 'AS', 'ASC', 'ASYMMETRIC', 'AUTHORIZATION', 'BINARY', 'BOTH', 'CASE', 'CAST', 'CHECK', 'COLLATE', 'COLLATION', 'COLUMN', 'CONCURRENTLY', 'CONSTRAINT', 'CREATE', 'CROSS', 'CURRENT_CATALOG', 'CURRENT_DATE', 'CURRENT_ROLE', 'CURRENT_SCHEMA', 'CURRENT_TIME', 'CURRENT_TIMESTAMP', 'CURRENT_USER', 'DEFAULT', 'DEFERRABLE', 'DESC', 'DISTINCT', 'DO', 'ELSE', 'END', 'EXCEPT', 'FALSE', 'FETCH', 'FOR', 'FOREIGN', 'FROM', 'FULL', 'GRANT', 'GROUP', 'HAVING', 'ILIKE', 'IN', 'INITIALLY', 'INNER', 'INTERSECT', 'INTO', 'IS', 'ISNULL', 'JOIN', 'LATERAL', 'LEADING', 'LEFT', 'LIKE', 'LIMIT', 'LOCALTIME', 'LOCALTIMESTAMP', 'NATURAL', 'NOT', 'NOTNULL', 'NULL', 'OFFSET', 'ON', 'ONLY', 'OR', 'ORDER', 'OUTER', 'OVERLAPS', 'PLACING', 'PRIMARY', 'REFERENCES', 'RETURNING', 'RIGHT', 'SELECT', 'SESSION_USER', 'SIMILAR', 'SOME', 'SYMMETRIC', 'TABLE', 'THEN', 'TO', 'TRAILING', 'TRUE', 'UNION', 'UNIQUE', 'USER', 'USING', 'VARIADIC', 'VERBOSE', 'WHEN', 'WHERE', 'WINDOW', 'WITH'];

const RESERVED_WORDS_CASSANDRA = ['ADD', 'ALL', 'ALTER', 'AND', 'ANY', 'APPLY', 'AS', 'ASC', 'ASCII', 'AUTHORIZE', 'BATCH', 'BEGIN', 'BIGINT', 'BLOB', 'BOOLEAN', 'BY', 'CLUSTERING', 'COLUMNFAMILY', 'COMPACT', 'CONSISTENCY', 'COUNT', 'COUNTER', 'CREATE', 'DECIMAL', 'DELETE', 'DESC', 'DOUBLE', 'DROP', 'EACH_QUORUM', 'FLOAT', 'FROM', 'GRANT', 'IN', 'INDEX', 'CUSTOM', 'INSERT', 'INT', 'INTO', 'KEY', 'KEYSPACE', 'LEVEL', 'LIMIT', 'LOCAL_ONE', 'LOCAL_QUORUM', 'MODIFY', 'NORECURSIVE', 'NOSUPERUSER', 'OF', 'ON', 'ONE', 'ORDER', 'PASSWORD', 'PERMISSION', 'PERMISSIONS', 'PRIMARY', 'QUORUM', 'REVOKE', 'SCHEMA', 'SELECT', 'SET', 'STORAGE', 'SUPERUSER', 'TABLE', 'TEXT', 'TIMESTAMP', 'TIMEUUID', 'THREE', 'TOKEN', 'TRUNCATE', 'TTL', 'TWO', 'TYPE', 'UPDATE', 'USE', 'USER', 'USERS', 'USING', 'UUID', 'VALUES', 'VARCHAR', 'VARINT', 'WHERE', 'WITH', 'WRITETIME', 'DISTINCT', 'BYTE', 'SMALLINT', 'COMPLEX', 'ENUM', 'DATE', 'INTERVAL', 'MACADDR', 'BITSTRING'];

const RESERVED_WORDS_ORACLE = ['ACCESS', 'ACCOUNT', 'ACTIVATE', 'ADD', 'ADMIN', 'ADVISE', 'AFTER', 'ALL', 'ALL_ROWS', 'ALLOCATE', 'ALTER', 'ANALYZE', 'AND', 'ANY', 'ARCHIVE', 'ARCHIVELOG', 'ARRAY', 'AS', 'ASC', 'AT', 'AUDIT', 'AUTHENTICATED', 'AUTHORIZATION', 'AUTOEXTEND', 'AUTOMATIC', 'BACKUP', 'BECOME', 'BEFORE', 'BEGIN', 'BETWEEN', 'BFILE', 'BITMAP', 'BLOB', 'BLOCK', 'BODY', 'BY', 'CACHE', 'CACHE_INSTANCES', 'CANCEL', 'CASCADE', 'CAST', 'CFILE', 'CHAINED', 'CHANGE', 'CHAR', 'CHAR_CS', 'CHARACTER', 'CHECK', 'CHECKPOINT', 'CHOOSE', 'CHUNK', 'CLEAR', 'CLOB', 'CLONE', 'CLOSE', 'CLOSE_CACHED_OPEN_CURSORS', 'CLUSTER', 'COALESCE', 'COLUMN', 'COLUMNS', 'COMMENT', 'COMMIT', 'COMMITTED', 'COMPATIBILITY', 'COMPILE', 'COMPLETE', 'COMPOSITE_LIMIT', 'COMPRESS', 'COMPUTE', 'CONNECT', 'CONNECT_TIME', 'CONSTRAINT', 'CONSTRAINTS', 'CONTENTS', 'CONTINUE', 'CONTROLFILE', 'CONVERT', 'COST', 'CPU_PER_CALL', 'CPU_PER_SESSION', 'CREATE', 'CURRENT', 'CURRENT_SCHEMA', 'CURREN_USER', 'CURSOR', 'CYCLE', ' ', 'DANGLING', 'DATABASE', 'DATAFILE', 'DATAFILES', 'DATAOBJNO', 'DATE', 'DBA', 'DBHIGH', 'DBLOW', 'DBMAC', 'DEALLOCATE', 'DEBUG', 'DEC', 'DECIMAL', 'DECLARE', 'DEFAULT', 'DEFERRABLE', 'DEFERRED', 'DEGREE', 'DELETE', 'DEREF', 'DESC', 'DIRECTORY', 'DISABLE', 'DISCONNECT', 'DISMOUNT', 'DISTINCT', 'DISTRIBUTED', 'DML', 'DOUBLE', 'DROP', 'DUMP', 'EACH', 'ELSE', 'ENABLE', 'END', 'ENFORCE', 'ENTRY', 'ESCAPE', 'EXCEPT', 'EXCEPTIONS', 'EXCHANGE', 'EXCLUDING', 'EXCLUSIVE', 'EXECUTE', 'EXISTS', 'EXPIRE', 'EXPLAIN', 'EXTENT', 'EXTENTS', 'EXTERNALLY', 'FAILED_LOGIN_ATTEMPTS', 'FALSE', 'FAST', 'FILE', 'FIRST_ROWS', 'FLAGGER', 'FLOAT', 'FLOB', 'FLUSH', 'FOR', 'FORCE', 'FOREIGN', 'FREELIST', 'FREELISTS', 'FROM', 'FULL', 'FUNCTION', 'GLOBAL', 'GLOBALLY', 'GLOBAL_NAME', 'GRANT', 'GROUP', 'GROUPS', 'HASH', 'HASHKEYS', 'HAVING', 'HEADER', 'HEAP', 'IDENTIFIED', 'IDGENERATORS', 'IDLE_TIME', 'IF', 'IMMEDIATE', 'IN', 'INCLUDING', 'INCREMENT', 'INDEX', 'INDEXED', 'INDEXES', 'INDICATOR', 'IND_PARTITION', 'INITIAL', 'INITIALLY', 'INITRANS', 'INSERT', 'INSTANCE', 'INSTANCES', 'INSTEAD', 'INT', 'INTEGER', 'INTERMEDIATE', 'INTERSECT', 'INTO', 'IS', 'ISOLATION', 'ISOLATION_LEVEL', 'KEEP', 'KEY', 'KILL', 'LABEL', 'LAYER', 'LESS', 'LEVEL', 'LIBRARY', 'LIKE', 'LIMIT', 'LINK', 'LIST', 'LOB', 'LOCAL', 'LOCK', 'LOCKED', 'LOG', 'LOGFILE', 'LOGGING', 'LOGICAL_READS_PER_CALL', 'LOGICAL_READS_PER_SESSION', 'LONG', 'MANAGE', 'MASTER', 'MAX', 'MAXARCHLOGS', 'MAXDATAFILES', 'MAXEXTENTS', 'MAXINSTANCES', 'MAXLOGFILES', 'MAXLOGHISTORY', 'MAXLOGMEMBERS', 'MAXSIZE', 'MAXTRANS', 'MAXVALUE', 'MIN', 'MEMBER', 'MINIMUM', 'MINEXTENTS', 'MINUS', 'MINVALUE', 'MLSLABEL', 'MLS_LABEL_FORMAT', 'MODE', 'MODIFY', 'MOUNT', 'MOVE', 'MTS_DISPATCHERS', 'MULTISET', 'NATIONAL', 'NCHAR', 'NCHAR_CS', 'NCLOB', 'NEEDED', 'NESTED', 'NETWORK', 'NEW', 'NEXT', 'NOARCHIVELOG', 'NOAUDIT', 'NOCACHE', 'NOCOMPRESS', 'NOCYCLE', 'NOFORCE', 'NOLOGGING', 'NOMAXVALUE', 'NOMINVALUE', 'NONE', 'NOORDER', 'NOOVERRIDE', 'NOPARALLEL', 'NOPARALLEL', 'NOREVERSE', 'NORMAL', 'NOSORT', 'NOT', 'NOTHING', 'NOWAIT', 'NULL', 'NUMBER', 'NUMERIC', 'NVARCHAR2', 'OBJECT', 'OBJNO', 'OBJNO_REUSE', 'OF', 'OFF', 'OFFLINE', 'OID', 'OIDINDEX', 'OLD', 'ON', 'ONLINE', 'ONLY', 'OPCODE', 'OPEN', 'OPTIMAL', 'OPTIMIZER_GOAL', 'OPTION', 'OR', 'ORDER', 'ORGANIZATION', 'OSLABEL', 'OVERFLOW', 'OWN', 'PACKAGE', 'PARALLEL', 'PARTITION', 'PASSWORD', 'PASSWORD_GRACE_TIME', 'PASSWORD_LIFE_TIME', 'PASSWORD_LOCK_TIME', 'PASSWORD_REUSE_MAX', 'PASSWORD_REUSE_TIME', 'PASSWORD_VERIFY_FUNCTION', 'PCTFREE', 'PCTINCREASE', 'PCTTHRESHOLD', 'PCTUSED', 'PCTVERSION', 'PERCENT', 'PERMANENT', 'PLAN', 'PLSQL_DEBUG', 'POST_TRANSACTION', 'PRECISION', 'PRESERVE', 'PRIMARY', 'PRIOR', 'PRIVATE', 'PRIVATE_SGA', 'PRIVILEGE', 'PRIVILEGES', 'PROCEDURE', 'PROFILE', 'PUBLIC', 'PURGE', 'QUEUE', 'QUOTA', 'RANGE', 'RAW', 'RBA', 'READ', 'READUP', 'REAL', 'REBUILD', 'RECOVER', 'RECOVERABLE', 'RECOVERY', 'REF', 'REFERENCES', 'REFERENCING', 'REFRESH', 'RENAME', 'REPLACE', 'RESET', 'RESETLOGS', 'RESIZE', 'RESOURCE', 'RESTRICTED', 'RETURN', 'RETURNING', 'REUSE', 'REVERSE', 'REVOKE', 'ROLE', 'ROLES', 'ROLLBACK', 'ROW', 'ROWID', 'ROWNUM', 'ROWS', 'RULE', 'SAMPLE', 'SAVEPOINT', 'SB4', 'SCAN_INSTANCES', 'SCHEMA', 'SCN', 'SCOPE', 'SD_ALL', 'SD_INHIBIT', 'SD_SHOW', 'SEGMENT', 'SEG_BLOCK', 'SEG_FILE', 'SELECT', 'SEQUENCE', 'SERIALIZABLE', 'SESSION', 'SESSION_CACHED_CURSORS', 'SESSIONS_PER_USER', 'SET', 'SHARE', 'SHARED', 'SHARED_POOL', 'SHRINK', 'SIZE', 'SKIP', 'SKIP_UNUSABLE_INDEXES', 'SMALLINT', 'SNAPSHOT', 'SOME', 'SORT', 'SPECIFICATION', 'SPLIT', 'SQL_TRACE', 'STANDBY', 'START', 'STATEMENT_ID', 'STATISTICS', 'STOP', 'STORAGE', 'STORE', 'STRUCTURE', 'SUCCESSFUL', 'SWITCH', 'SYS_OP_ENFORCE_NOT_NULL$', 'SYS_OP_NTCIMG$', 'SYNONYM', 'SYSDATE', 'SYSDBA', 'SYSOPER', 'SYSTEM', 'TABLE', 'TABLES', 'TABLESPACE', 'TABLESPACE_NO', 'TABNO', 'TEMPORARY', 'THAN', 'THE', 'THEN', 'THREAD', 'TIMESTAMP', 'TIME', 'TO', 'TOPLEVEL', 'TRACE', 'TRACING', 'TRANSACTION', 'TRANSITIONAL', 'TRIGGER', 'TRIGGERS', 'TRUE', 'TRUNCATE', 'TX', 'TYPE', 'UB2', 'UBA', 'UID', 'UNARCHIVED', 'UNDO', 'UNION', 'UNIQUE', 'UNLIMITED', 'UNLOCK', 'UNRECOVERABLE', 'UNTIL', 'UNUSABLE', 'UNUSED', 'UPDATABLE', 'UPDATE', 'USAGE', 'USE', 'USER', 'USING', 'VALIDATE', 'VALIDATION', 'VALUE', 'VALUES', 'VARCHAR', 'VARCHAR2', 'VARYING', 'VIEW', 'WHEN', 'WHENEVER', 'WHERE', 'WITH', 'WITHOUT', 'WORK', 'WRITE', 'WRITEDOWN', 'WRITEUP', 'XID', 'YEAR', 'ZONE'];

const RESERVED_WORDS_MONGO = ['DOCUMENT'];

const SUPPORTED_VALIDATION_RULES = ['required', 'max', 'min', 'maxlength', 'minlength', 'maxbytes', 'minbytes', 'pattern'];

const constants = {
    QUESTIONS: 16, // maximum possible number of questions
    CLIENT_QUESTIONS: 3,
    SERVER_QUESTIONS: 13,
    INTERPOLATE_REGEX: /<%:([\s\S]+?)%>/g, // so that tags in templates do not get mistreated as _ templates
    DOCKER_DIR: MAIN_DIR + 'docker/',

    MAIN_DIR: MAIN_DIR,
    TEST_DIR: TEST_DIR,

    CLIENT_MAIN_SRC_DIR: MAIN_DIR + 'webapp/',
    CLIENT_TEST_SRC_DIR: TEST_DIR + 'javascript/',
    CLIENT_DIST_DIR: CLIENT_DIST_DIR,
    ANGULAR_DIR: MAIN_DIR + 'webapp/app/',
    VUE_DIR: MAIN_DIR+'vue/',
    SERVER_MAIN_SRC_DIR: MAIN_DIR + 'java/',
    SERVER_MAIN_RES_DIR: MAIN_DIR + 'resources/',
    SERVER_TEST_SRC_DIR: TEST_DIR + 'java/',
    SERVER_TEST_RES_DIR: TEST_DIR + 'resources/',

    //entity related
    RESERVED_WORDS_JAVA: RESERVED_WORDS_JAVA,
    RESERVED_WORDS_MYSQL: RESERVED_WORDS_MYSQL,
    RESERVED_WORDS_POSGRES: RESERVED_WORDS_POSGRES,
    RESERVED_WORDS_CASSANDRA: RESERVED_WORDS_CASSANDRA,
    RESERVED_WORDS_ORACLE: RESERVED_WORDS_ORACLE,
    RESERVED_WORDS_MONGO: RESERVED_WORDS_MONGO,
    SUPPORTED_VALIDATION_RULES: SUPPORTED_VALIDATION_RULES

};

module.exports = constants;
